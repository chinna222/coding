const permutations = [];
function permut(curr, ref) {
  if (ref.length === 0) {
    permutations.push(curr);
    return;
  }
  const char = ref[0];
  for (let i = 0; i <= curr.length; i++) {
    const start = curr.slice(0, i);
    const end = curr.slice(i);
    const updatedRef = ref.slice(1);
    const updatedCurr = start + char + end;
    permut(updatedCurr, updatedRef);
  }
}

permut("", "abc");
console.log("res", permutations);
