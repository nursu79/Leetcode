var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let Area = Math.min(height[left], height[right]) * (right - left); // Calculate area
    if (Area > max) {
      max = Area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

