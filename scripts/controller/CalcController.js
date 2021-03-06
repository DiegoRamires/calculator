class CalcController {
  constructor(){
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();
  }

  initialize(){
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");

    displayCalcEl.innerHTML = "4567";
    dateEl.innerHTML = "21/06/2018";
    timeEl.innerHTML = "13:57";
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor){
    this._displayCalc = valor;
  }

  get currentDate(){
    return this._currentDate;
  }

  set currentDate(data){
    this._currentDate = data;
  }
}