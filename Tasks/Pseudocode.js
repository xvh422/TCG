//Task 1

//Define FixStart with single string as argument
    //LET firstCharacter = inputString[0]
    //LET outputString = ''
    //FOR 0 < i < length of inputString
        //IF inputString[i] === firstCharacter
            //outputString += '*'
        //ELSE
            //outputString =+ inputString[i]
    //RETURN outputString

//Task 2

//CREATE bookList [{title1, author1, isRead}, {title2, author2, isRead}, etc]
//FOR 0 <= i < length of bookList
    //IF isRead === True
        //LOG `You already read "{bookList[i][0]}" by {bookList[i][1]}.`
    //ELSE IF isRead === False
        //LOG `You still need to read "{bookList[i][0]}" by {bookList[i][1]}.`

//Task 3

//CREATE recipeList [{title1, servings1, ingredients1, directions1}, {title2, servings2, ingredients2, directions2}, etc]
//FOR 0 <= i < length of recipeList
    //LOG title
    //LOG servings
    //FOR 0 <= j < length of ingredients
        //LOG ingredients[j]
    //LOG directions