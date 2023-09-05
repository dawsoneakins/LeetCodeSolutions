public class StringToIntegerSolution
{
    public int MyAtoi(string s)
    {
        bool isNegative = false;
        bool containsPositive = false;
        String formatValue = "";
        int returnValue = 0;

        for (int i = 0; i < s.Length; i++)
        {

            if (s[i] == '-')
            {
                if (i > 0)
                {
                    if (Char.IsNumber(s[i - 1]))
                    {
                        break;
                    }

                    if (i + 1 > s.Length - 1)
                    {
                        break;
                    }

                    if (Char.IsWhiteSpace(s[i + 1]) || s[i + 1] == '-' || Char.IsLetter(s[i + 1]))
                    {
                        break;
                    }
                }

                isNegative = true;
                continue;
            }

            if (s[i] == '+')
            {
                if (i > 0)
                {
                    if (Char.IsNumber(s[i - 1]))
                    {
                        break;
                    }

                    if (Char.IsWhiteSpace(s[i + 1]) || s[i + 1] == '+' || Char.IsLetter(s[i + 1]))
                    {
                        break;
                    }
                }

                containsPositive = true;
                continue;
            }

            if (s[i] == ' ')
            {
                if (i > 0)
                {
                    if (Char.IsNumber(s[i - 1]))
                    {
                        break;
                    }
                }

                continue;
            }

            if (!Char.IsNumber(s[i]) && s[i] != ' ')
            {
                if (String.IsNullOrEmpty(formatValue))
                {
                    formatValue = "0";
                }

                break;
            }

            if (containsPositive && isNegative)
            {
                isNegative = false;
                formatValue = "0";
                break;
            }

            formatValue = formatValue + Convert.ToString(s[i]);
        }

        if (s.Length == 0)
        {
            formatValue = "0";
        }

        if (containsPositive && formatValue.Length == 0)
        {
            containsPositive = false;
            formatValue = "0";
        }

        if (isNegative && formatValue.Length > 0)
        {
            formatValue = "-" + formatValue;
        }

        if (isNegative && formatValue.Length == 0)
        {
            isNegative = false;
            formatValue = "0";
        }

        bool parsed = Int32.TryParse(formatValue, out int result);
        returnValue = result;
        if (!parsed)
        {
            if (isNegative && formatValue.Length > 1)
            {
                returnValue = -2147483648;
            }

            else if (formatValue.Length == 0)
            {
                returnValue = 0;
            }

            else
            {
                returnValue = 2147483647;
            }

        }

        return returnValue;
    }
    public static void Main(String[] args)
    {
        StringToIntegerSolution solution = new StringToIntegerSolution();
        //"4193 with words"
        //"00000-42a1234"
        String s = " +-";

        Console.WriteLine(solution.MyAtoi(s));
    }
}



