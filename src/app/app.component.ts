import { Pizza } from 'app/shared/models/pizza'; // import the model of the pizza
import { Component, HostListener, NgZone } from '@angular/core';

const contract = require('truffle-contract'); // import truffle contract 
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  account: any; // first account in contract -- contract creator
  accounts: any; // all accounts in contract
  
  web3: any; // Ethereum development framework -- lets you excute Ethereum based commands
  pizzaArray: Pizza[] = []; // will hold pizza's available in smart contract 
  pizzaVotes:any; // holds the votes for current voter account
    
  status: string; // status to show in html

  voter: string = ''; // set voter address here
  voterPassword: string = ''; // set voter password here
  voterUrl: string = '' + this.voter; // shows etherscan details of voter account
  contractUrl: string = '' // shows etherscan details of contract account

  voterTokensBought: number; // holds total value of tokens bought by voter account
  voterTokensBalance: number; // holds total tokens open for spending for voter account
  voterETHBalance: number; // holds total ETH of voter account

  contractTokensTotal:number;
  contractTokensAvailable:number;
  contractETHBalance: number;

  tokenPrice: number; // holds token price -- 1/10 ETH

  constructor(private _ngZone: NgZone) {
  }

  @HostListener('window:load')
  windowLoaded() { // start when window loaded is retreived from browser 
    this.checkAndInstantiateWeb3(); // loads the web3 ethereum framwework
    this.onReady(); // start
  }

  checkAndInstantiateWeb3(){
  };

  onReady(){
  };

  populatePizzas(){
  }

  unlockAccount(){
  }

  buyTokens(tokensToBuy){
  }

  voteForPizza(pizzaName) {
  }  

  lookupVoterInfo() {
  }  

  populateTokenData(){
  }

}
