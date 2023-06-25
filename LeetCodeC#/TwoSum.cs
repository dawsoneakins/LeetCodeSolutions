using System;
using System.Collections.Generic;

public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        int complement;
        Dictionary<int, int> result = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            complement = target - nums[i];

            if (result.ContainsKey(i))
            {
                return result[complement, i];
            }
        }

        return [];
    }

    static void Main()
    {
        int[] nums = { 2, 7, 11, 15 };
        Console.WriteLine(TwoSum(nums, 9));
    }
}