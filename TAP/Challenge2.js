function majorElement(nums) {
    const dict = {};
    
    for (let i = 0; i < nums.length; i++) {
      if (dict[nums[i]] === undefined) {
        dict[nums[i]] = 1;
      } else {
        dict[nums[i]]++;
      }
      
      if (dict[nums[i]] > nums.length / 2) {
        return nums[i];
      }
    }
  }
   majorElement([2,3,3,1,1,2,2])