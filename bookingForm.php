<html>
    <head><title>
     Form Submission
    </title></head>
    <body>
    <?php 
$name = $_POST["name"];
$phone = $_POST["phone"];
$date = $_POST["date"];
$message = $_POST["message"];

mail("nimanajafi@yahoo.com",$name ,$phone,$date,$message);
?>
        
    </body>
</html>

