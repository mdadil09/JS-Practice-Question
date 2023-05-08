class Solution 
{ 
public: 
#define ll long long 
    vector<ll> xorPairs(int n, vector<int> &A1, vector<int> &A2, int Q, vector<vector<int>> &query) 
    { 
        vector<vector<ll>> temp(30, vector<ll>(n)), temp1(30, vector<ll>(n)); 
        for (int j = 0; j < 30; j++) 
        { 
            for (int i = 0; i < n; i++) 
            { 
                temp[j][i] = (i ? temp[j][i - 1] : 0) + ((A1[i] >> j) & (1ll) == 1); 
            } 
            for (int i = 0; i < n; i++) 
            { 
                temp1[j][i] = (i ? temp1[j][i - 1] : 0) + ((A2[i] >> j) & (1ll) == 1); 
            } 
        } 
        vector<ll> res; 
        for (auto it : query) 
        { 
            ll k = it[0]; 
            k--; 
            ll l1 = it[1]; 
            ll r1 = it[2]; 
            ll l2 = it[3]; 
            ll r2 = it[4]; 
            l1--; 
            r1--; 
            l2--; 
            r2--; 
            ll cnt_k_1 = temp[k][r1] - (l1 ? temp[k][l1 - 1] : 0); 
            ll cnt_k_2 = temp1[k][r2] - (l2 ? temp1[k][l2 - 1] : 0); 
            ll ans1 = 0; 
            ans1 += (r1 - l1 + 1 - cnt_k_1) * (cnt_k_2); 
            ans1 += (r2 - l2 + 1 - cnt_k_2) * (cnt_k_1); 
            res.push_back(ans1); 
        } 
        return res; 
    } 
};