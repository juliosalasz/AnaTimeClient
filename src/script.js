let infoObject = {
  brand: "",
  type: "",
  temperature: 5,
};

function brandName(value) {
  // api object
  infoObject = { ...infoObject, brand: value };
  console.log(infoObject);
}

function rangeSlide(value, min, max) {
  // api object
  infoObject = { ...infoObject, temperature: value };

  //change background color
  const backValue = (value - min) / (max - min);
  const color = `rgb(255, 199, 54, ${backValue})`;
  document.getElementById("rangeSlider").style.backgroundColor = color;

  console.log(infoObject);
}
