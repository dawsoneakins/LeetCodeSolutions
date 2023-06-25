public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> numberDictionary = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int complement = target - nums[i];
            if (numberDictionary.ContainsKey(complement))
            {
                return new int[] { numberDictionary[complement], i };
            }

            if (!numberDictionary.ContainsKey(nums[i]))
            {
                numberDictionary.Add(nums[i], i);
            }
        }

        throw new ArgumentException("No two numbers add up to the target.");
    }

    static void Main()
    {
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        Solution solution = new Solution();

        int[] result = solution.TwoSum(nums, target);

        Console.WriteLine("Indices of the two numbers that add up to target:");
        Console.WriteLine($"[{result[0]}, {result[1]}]");
    }
}
