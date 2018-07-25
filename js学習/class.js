class User {
  // constructorはクラスをインスタンス化する為のメソッド
  // メソッド   引数,       引数
  constructor (firstName, lastName) {
    // 変数
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayName () {
    console.log(this.firstName + ' ' + this.lastName);
  }
}
// constructorの引数にTaroとYamadaを渡す。
let user = new User('Taro', 'Yamada');
// sayNameメソッドを実行
user.sayName();
