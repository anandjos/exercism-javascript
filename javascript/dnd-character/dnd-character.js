export const abilityModifier = (num) => {
  if(num<3)
    throw new Error("Ability scores must be at least 3");
  if(num>18)
    throw new Error("Ability scores can be at most 18");
  return Math.floor((num-10)/2);
};

export class Character {
  constructor(){
  this.str = Character.rollAbility();
  this.dex = Character.rollAbility();
  this.con = Character.rollAbility();
  this.intel = Character.rollAbility();
  this.wis = Character.rollAbility();
  this.cha = Character.rollAbility();
  }
  static rollAbility() {
    let arr=[],sum=0;
    for(let i=0; i<4; i++)
    {
      arr[i]=Math.floor(Math.random()*6 + 1);
      sum+=arr[i];
    }
    return sum-Math.min(...arr);
  }

  get strength() {
    return this.str;
  }

  get dexterity() {
    return this.dex;
  }

  get constitution() {
    return this.con;
  }

  get intelligence() {
    return this.intel;
  }

  get wisdom() {
    return this.wis;
  }

  get charisma() {
    return this.cha; 
  }

  get hitpoints() {
    return 10+abilityModifier(this.con);
  }
}
