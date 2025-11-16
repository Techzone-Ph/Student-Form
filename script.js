<!DOCTYPE html>
<html>
<head>
  <title>Student Form</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
<body>

  <div class="form">
  <h1 class="Mydiv">Student Registration Form</h1>
  
  <form>
    <label for="fname">First Name:</label>  
    <input type="text" id="fname" name="fname" placeholder="First Name" required>

    <label for="mid">Middle Name:</label>
    <input type="text" id="mid" name="mid" placeholder="Middle Name" required>

    <label for="lname">Last Name:</label>
    <input type="text" id="lname" name="lname" placeholder="Last Name" required>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" placeholder="Age" required>

    <label for="section">Section:</label>
    <input type="text" id="section" name="section" placeholder="Section" required>

    <label for="year">Year Level:</label>
    <select>
    <option value="1st Year">1st Year</option>
    <option value="2nd Year">2nd Year</option>
    <option value="3rd Year">3rd Year</option>
    <option value="4th Year">4th Year</option>
    </select>

    <label for="course">Course:</label>
    <select>
    <option value="BSIT">Bachelor of Science in Information Technology</option>
    <option value="BSA">Bachelor of Science in Accountancy</option>
    <option value="BSCPE">Bachelor of Science in Computer Engineering</option>
    <option value="BEEd">Bachelor of Elementary Education</option>
    <option value="BSSE">Bachelor of Secondary Education</option>
    </select>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
    </select><br><br>

    <input type="submit" value="Submit">
  </form>
  
  <script src="index.js"></script>
</div>
</body>
</html>
