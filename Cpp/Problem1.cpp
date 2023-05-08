/*You are given a sequence A of N integers and an integer M

You need to find the smallest integer P such that 1<=P<=10^9,and exactly M elements of the given sequence.are greater than or equal to P.

If it is not possible to find any such integer print -1.

Constraints:

1<=N<=10^5

0<=M<=N

1<=seq_Ai<=10^9

Input Format

The first line contains an integer N, denoting the number of elements in the seq A.

The next N lines contain an integer representing elements in seq_A.

The next line contains an integer M.

Output Format

Print the smallest value of P.

Sample Testcase #0
6
1
2
3
4
5
6

output:
4
*/


#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n;
    
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    cin >> m;
    
    sort(a.begin(), a.end());
    
    int count = 0;
    int p = a[n-1];
    for (int i = n-1; i >= 0; i--) {
        if (a[i] >= p) {
            count++;
            if (count == m) {
                cout << p << endl;
                return 0;
            }
        } else {
            p = a[i];
        }
    }
    
    cout << "-1" << endl;
    
    return 0;
}
