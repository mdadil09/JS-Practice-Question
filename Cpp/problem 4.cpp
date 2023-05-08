bool help(long long int a,long long int b,vector<int>&t){
        long long int x=0;
        for(auto &i:t){
          x+=(a/i);  
        }
       
        return x>=b;
    }
    long long minimumTime(int N, int NUM, vector<int> &time) {
        long long int start=0,end=1e16,res=0;
        while(start<=end){
            long long int mid=(start+(end-start)/2ll);
        
            if((help(mid,NUM,time))){
                
                res=mid;
                end=mid-1;
            }
            else start=mid+1;
        }
        return res;
    }