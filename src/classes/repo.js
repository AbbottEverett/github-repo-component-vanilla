// class Repo {
//   constructor(repoData, id) {
//     this.id = id;
//     this.fork = repoData.fork;
//     this.name = repoData.name;
//     this.html_url = repoData.html_url;
//     this.language = repoData.language;
//     this.star_count = repoData.stargazers_count;
//     this.watchers = repoData.watchers_count;
//     this.forks_count = repoData.forks_count;
//     this.description = repoData.description;
//   }
//   createElement(tag, textContent, classList) {
//     let el = document.createElement(tag);
//     if (textContent !== undefined) {
//       el.textContent = textContent;
//     }
//     if (classList !== undefined) {
//       el.classList = classList;
//     }
//     return el;
//   }
//   createIcon(classNames) {
//     let icon = document.createElement('i');
//     icon.classList = classNames;
//     return icon;
//   }
//   createListItem(key, index) {
//     let listItem = this.createElement('li');
//     switch(key) {
//       case 'fork':
//         if(this[key]) {
//           listItem.append(this.createIcon('fa fa-code-fork'));
//         } else {
//           listItem.append(this.createIcon('fa fa-book'));
//         }
//         break;
//       case 'name':
//         let header = this.createElement('h2');
//         let link = this.createElement('a', this[key]);
//         link.setAttribute('href', this.html_url);
//         header.append(link);
//         listItem.append(header)
//         listItem.classList = 'header';
//         break;
//       case 'language':
//         if (this[key]) {
//           listItem.append(this.createElement('h3', this[key]));
//         }
//         break;
//       case 'forks_count':
//       case 'watchers':
//       case 'star_count':
//         listItem.append(this.createIcon('fa fa-star'));
//         listItem.append(this.createElement('span', this[key]));
//         break;
//       case 'html_url':
//       case 'id':
//         break;
//       default:
//         listItem.textContent = this[key];
//         break;
//     }
//     return listItem;
//   }
//   createAllListItems(list){
//     // Consider putting ul creation in createAllListItems
//     // potentially not extendable, consider a different loop
//     Object.keys(this).forEach((key, i) => {
//       let li = this.createListItem(key, i);
//       list.append(li);
//     });
//   }
//   renderRepo() {
//     let repo = document.createDocumentFragment();
//     let div = this.createElement('div', undefined, 'repo');
//     let ul = this.createElement('ul');
//     repo.append(div);
//     div.append(ul);
//     this.createAllListItems(ul);
//     return div;
//   }
// }
