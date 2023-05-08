  vector<int> findDifferenceArray(int n, vector<int> &A) {
    vector<int>pre(n, 0) , b(n, 0);
    for(int i=0;i<n;i++){
        pre[i] = min((i?pre[i-1]:INT_MAX) , A[i]);
    }
    for(int i=n-1;i>=0;i--){
        b[i] = min(((i+1<n)?b[i+1]:INT_MAX) , A[i]);
    }
    if(n==1){
        return {0};
    }
    vector<int>res(n, 0);
    for(int i=0;i<n;i++){
        if(i==0){
            res[i] = -b[i+1];
            continue;
        }
            
        if(i==n-1){
            res[i] = pre[i-1];
            continue;
        }    
        res[i] = pre[i-1] - b[i+1];
    }
        return res;
}