<?php
require 'database/database.php';
$errors = [];
var_dump($_GET);
?>
<?php require 'includes/header.php'; ?>
<h2>New article</h2>
<form method="GET" id="formArticle">
 <div>
  <label for="title">Title</label>
  <input name="title" id="title" placeholder="Article title" required>
 </div>
 <div>
  <label for="content">Content</label>
  <textarea name="content" rows="4" cols="40" id="content" placeholder="Article content"></textarea>
 </div>
 <label for="pets">Choose a pet</label>
 <select name="pets" id="pets">
  <option value="">
  </option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
 </select>
 <button>Add</button>
</form>
<?php require 'includes/footer.php'; ?>