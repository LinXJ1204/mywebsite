let height = [3,5,5,2,5,5,6,6,4,4,1,1,2,5,5,6,6,4,1,3];

const largestRectangleArea = (height, start, end) => {
    if(end==start){
        return height[start];
    }
    let mid = parseInt((start + end)/2);
    let leftmax = largestRectangleArea(height, start, mid);
    let rightmax = largestRectangleArea(height, mid+1, end);
    console.log(start, mid, end)
    let max = height[mid];
    let pointer = mid;
    let max1 = max;
    let max2;
    if(height[mid+1]>=max){
        max1 = max*2;
        while(height[pointer]>=height[mid]){
            pointer = pointer - 1;
            if(pointer<start)break;
        }
        max1 = max1+height[mid]*(mid-pointer-1);
        //console.log(max1);
        pointer = mid+1;
        while(height[pointer]>=height[mid]){
            pointer = pointer + 1;
            if(pointer>end)break;
        }
        max1 = max1+height[mid]*(pointer-mid-2);
        //console.log(max1);
    }
    pointer = mid;
    max2 = max1;
    if(height[mid+1]<max){
        max1 = height[mid+1]*2;
        while(height[pointer]>=height[mid+1]){
            pointer = pointer - 1;
            console.log(pointer);
            if(pointer<start)break;
        }
        max1 = max1+height[mid+1]*(mid-pointer-1);
        pointer = mid+1;
        while(height[pointer]>=height[mid+1]){
            pointer = pointer + 1;
            if(pointer>end)break;
        }
        max1 = max1+height[mid+1]*(pointer-mid-2);
    }
    if(max2>max1){
        max = max2;
    }else{
        max = max1;
    }
    console.log(leftmax, rightmax);
    if(rightmax>max){
        max = rightmax;
    }
    if(leftmax>max){
        max = leftmax;
    }
    return max;
};

let ans = largestRectangleArea(height, 0, height.length-1);
console.log(ans);