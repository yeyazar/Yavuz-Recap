#include <iostream>
using namespace std;

int main(){

    cout << "Break / Continue" << endl;

    int i= 0;
    while(i<10){
        cout << i << "\n";
        i++;
        if (i==4){
            break;
        }
    }

    int j= 0;
    while(j<10){
        cout << j << "\n";
        j++;
        if (j==4){
            continue;
        }
    }

    
    return 0;
}