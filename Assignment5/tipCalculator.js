function submitForm(){
  var billAmount = document.getElementById('totalBill').value;
  var tipPercent = document.getElementById('tip').value;
  var numOfPeople = document.getElementById('numOfPeople').value;


if(billAmount === ''){
  alert("Please insert the bill amount.");
}else if(numOfPeople === ''){
  alert("Please insert the number of people.");
}else{
    var priceEach = Math.round((billAmount*tipPercent)/numOfPeople);
    document.getElementById('tipImage').src="https://www.thespruce.com/thmb/pE2lOOOsv1rfBjnIl0PrdiYr62s=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Receiptandmoney-GettyImages-78773767-5a3f4222f1300a003795e0cd.jpg";
    document.getElementById('resultPara').innerHTML="Tip Amount is "+priceEach+" Each";


  }
}
