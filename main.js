function isFisrtLetterUpperCase(str)
{
    regexp = /^[A-Z]/;
    if (regexp.test(str))
    {
        alert(str);
    }
    else
    {
        alert("Chữ cái đầu không viết hoa");
    }
}

isFisrtLetterUpperCase("Tất cả những điều thực sự ác độc đều bắt đầu từ sự ngây thơ.");

// điều kiện so sánh là chữ viết hoa từ A-Z, Ở là từ trong tiếng việt không có trong tiếng anh nên đưa ra kết quả sai
isFisrtLetterUpperCase("Ở đời có 3 chữ Đừng\n" +
                            "\n" +
                            "Đừng hiền quá để người ta bắt nạt.\n" +
                            "\n" +
                            "Đừng ngốc quá để người ta đùa giỡn.\n" +
                            "\n" +
                            "Đừng tin tưởng quá để khi bị lừa dối cũng không đến nỗi bi thương.");

isFisrtLetterUpperCase("người ta nói, con ong, độc nhất ở cái đuôi, còn đàn bà độc nhất là ở tấm lòng."+
                            "Không sai đâu, hãy nghĩ kĩ đi, nếu bạn không chọc phá con ong, nó sẽ chẳng chích," +
                            "cũng như đàn bà, nếu không đẩy họ vào đường cùng, họ sẽ không bao giờ thâm độc.");
