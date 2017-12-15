class UserInfoCard {
  constructor(userData) {
    this.name = userData.name;
    this.avatar = userData.avatar_url;
    this.hirable = userData.hirable;
    this.bio = userData.bio;
  }
  createUserCard(){
    let img = document.createElement('img');
    img.setAttribute('src', this.avatar);
    img.setAttribute('width', '75px');
    return img;
  }
  renderUserCard() {
    let div = document.createElement('div');
    div.append(this.createUserCard());
    root.append(div);
  }
}
