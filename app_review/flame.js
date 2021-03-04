
getInp = () => {
  let inp = document.getElementById('review').value;
  return inp
}


writeRev = () => {

  //document.getElementById('information').style.visibility = 'hidden';
  document.getElementById('information').style.display = 'none';
  document.getElementById('moreInfo').style.display = 'none';
  document.getElementById('writeReview').style.display = 'inline';

}

moreInfo = () => {

  document.getElementById('information').style.display = 'none';
  document.getElementById('moreInfo').style.display = 'inline';

}


predict = () => {
  let reviev = getInp()
  let cls = classify(reviev)

  console.log(cls)

  if (cls == 1){
    document.getElementById('result').innerHTML = 'It seems you liked the book!'
    document.getElementById('result').style.color = '#fbe9e7';
  }
  else{
      document.getElementById('result').innerHTML = 'It seems you did not like the book!'
      document.getElementById('result').style.color = 'black';
  }
}
