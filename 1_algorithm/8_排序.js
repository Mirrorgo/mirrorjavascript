let input = [99, 0, 2, 4, 1, 6, 8, 13, 66, 2];
/* é¢è¯ä¸­ð
åºç¡æåºç®æ³ï¼
* åæ³¡æåº
* éæ©æåº
* æå¥æåº
è¿é¶æåºç®æ³
* å½å¹¶æåº
* å¿«éæåº
*/
{
  //ä¸è¬å®éå¼åä¸­
  console.log([...input].sort((a, b) => a - b));
}
//æ¯å¦Chrome V8ä¸­,åºäºå¯¹æ§è½çèè,sortæ¹æ³ä½¿ç¨äºä¸¤ç§æ¹æ¡: æå¥æåºåå¿«æ.
//å½ç®æ æ°ç»é¿åº¦å°äº10æ¶ï¼ä½¿ç¨æå¥æåºï¼åä¹ï¼ä½¿ç¨å¿«æ
{
  (function bubbleSort(inp) {
    //ç¸é»æ¯å¯¹, å¤§çåç§», æ¯è½®æä¸ä¸ªæå¤§çæ°å­åæ³¡å°æ°ç»æ«å°¾
    const nums = [...inp];
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1])
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    console.log(nums, "bubble");
  })(input);
}
(function bubbleSort(inp) {
  const nums = [...inp];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  console.log(nums, "è¿ä¸æ¯åæ³¡");
})(input);

(function selectOrder(inp) {
  //éæ©æåº:èå´åéæ©ä¸ä¸ªæå°ç,æ¾å¨æåé¢
  const nums = [...inp];
  for (let i = 0; i < nums.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIdx] > nums[j]) minIdx = j;
    }
    if (minIdx !== i) [nums[minIdx], nums[i]] = [nums[i], nums[minIdx]];
  }
  console.log(nums, "select");
})(input);

(function insertOrder(inp) {
  // æå¥æåº
  /* 
  æ ¸å¿ææ³:"æ¾å°åç´ å¨å®åé¢é£ä¸ªåºåä¸­çæ­£ç¡®ä½ç½®"
  å·ä½æ¥è¯´ï¼æå¥æåºææçæä½é½åºäºä¸ä¸ªè¿æ ·çåæï¼å½ååç´ åé¢çåºåæ¯æåºçã
  åºäºè¿ä¸ªåæï¼ä»åå¾åå»å¯»æ¾å½ååç´ å¨åé¢é£ä¸ªåºåéçæ­£ç¡®ä½ç½® 
  */
  const nums = [...inp];
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[i]) {
      j--;
    }
    nums.splice(j, 0, ...nums.splice(i, 1));
  }
  console.log(nums, "insert");
})(input);
//---------------
(function mergeSort(inp) {
  //å½å¹¶æåº
  const nums = [...inp];
  const ms = (group) => {
    if (group.length === 1) return group;
    if (group.length === 2) {
      if (group[0] > group[1]) [group[1], group[0]] = [group[0], group[1]];
      return group;
    }
    const mid = Math.floor(group.length / 2);
    const left = ms(group.slice(0, mid));
    const right = ms(group.slice(mid, group.length));
    return mergeArray(left, right);
  };
  console.log(ms(nums), "merge");
  function mergeArray(left, right) {
    let p1 = 0,
      p2 = 0;
    const res = [];
    while (p1 < left.length && p2 < right.length) {
      if (left[p1] < right[p2]) {
        res.push(left[p1]);
        p1++;
      } else {
        res.push(right[p2]);
        p2++;
      }
    }
    if (p1 === left.length) return res.concat(right.slice(p2));
    else return res.concat(left.slice(p1));
  }
})(input);

function quickSort(nums) {
  if (nums.length <= 1) return nums;
  const left = [],
    right = [];
  let pivot = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (i === pivot) continue;
    if (nums[i] < nums[pivot]) left.push(nums[i]);
    else right.push(nums[i]);
  }
  return quickSort(left).concat(nums[pivot], quickSort(right));
}
console.log(quickSort(input), "quick");

// mergeç±»ä¼¼èªåºåä¸, quickæ¯èªé¡¶åä¸

console.log(input, "åæ°ç»");
