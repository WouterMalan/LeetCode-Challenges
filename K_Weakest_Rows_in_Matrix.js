// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned 
//in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

//     The number of soldiers in row i is less than the number of soldiers in row j.
//     Both rows have the same number of soldiers and i < j.

// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.


// var kWeakestRows = function(mat, k) {
//     let arr = [];
//     for(let i = 0; i < mat.length; i++){
//         let count = 0;
//         for(let j = 0; j < mat[i].length; j++){
//             if(mat[i][j] === 1){
//                 count++;
//             }
//         }
//         arr.push(count);
//     }
//     arr.sort((a,b) => a - b);
//     let result = [];
//     for(let i = 0; i < k; i++){
//         result.push(arr.indexOf(arr[i]));
//     }
//     return result;
// }

var kWeakestRows = function(M, K) {
    let y = M.length, x = M[0].length,//y = rows, x = columns
        vis = new Uint8Array(y), ans = []//vis = visited, ans = answer array 
    for (let j = 0; j <= x; j++)//j = columns 
        for (let i = 0; i < y; i++) {//i = rows 
            if (!vis[i] && !M[i][j]) ans.push(i), vis[i]++//if not visited and 0, push to ans and mark visited
            if (ans.length === K) return ans//if ans.length === K, return ans 
        }
};
