{
  const input = [1, 2, 4, 4, 3, 3, 1, 5, 3];
  let findDuplicate = function (input) {
    return [
      ...new Set(
        input.filter((cur, index, self) => {
          return self.indexOf(cur) !== index;
        })
      ),
    ].sort((a, b) => a - b);
  };
  console.log(findDuplicate(input));
}
