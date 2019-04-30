//first code challenge

// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let output = 'L';
  for (let i =0; i<N; i++) {
      if (i === N-1) {
          let final = output.repeat(N);
          process.stdout.write(final)
      } else {
          process.stdout.write('L\n')  
      }
    
  }
  
}