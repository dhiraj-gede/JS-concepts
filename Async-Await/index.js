
const getUsers = async()=>{
    return (await fetch('https://api.github.com/users')).json()    
}    
function populateUL(user){
    //getElement
    const listItems = document.getElementById('users');
    //-- getElement
    //createElement
    const listItem = document.createElement('li');
    const cardBox = document.createElement('div');
    const memberCard = document.createElement('div');
    const thumbnail = document.createElement('div');
    const profileImage = document.createElement('img');
    const loginName = document.createElement('div');
    const loginName_heading= document.createElement('h4');
    const loginName_P= document.createElement('p');
    const loginName_P_Span= document.createElement('span');
    const loginName_P_Span_a= document.createElement('a');
    const repBtn= document.createElement('button');
    const details= document.createElement('div');
    const detailsRow= document.createElement('div');
    const detailscol= document.createElement('div');
    const detailscol_sub= document.createElement('div');
    const followers_h= document.createElement('h4');
    const repos_h= document.createElement('h4');
    const organizations_h= document.createElement('h4');
    const followers_p= document.createElement('p');
    const repos_p= document.createElement('p');
    const organizations_p= document.createElement('p');
    //--createElement
    //setAttribute
    listItems.setAttribute('class', 'row list-unstyled')
    listItem.setAttribute('id',user.id);
    listItem.setAttribute('class','col-lg-4');
    cardBox.setAttribute('class','text-center card-box');
    memberCard.setAttribute('class','member-card border rounded pt-2 pb-2');
    thumbnail.setAttribute('class','thumb-lg member-thumb mx-auto');
    profileImage.setAttribute('class','rounded-circle img-thumbnail');
    profileImage.setAttribute('src', `${user.avatar_url}`)
    loginName.setAttribute('class','login');
    loginName_P.setAttribute('class','text-muted');
    loginName_P_Span_a.setAttribute('class','text-pink');
    loginName_P_Span_a.setAttribute('href',user.html_url);
    loginName_P_Span_a.setAttribute('target','_blank');
    repBtn.setAttribute('type','btn');
    repBtn.setAttribute('class','btn btn-success mt-3 btn-rounded waves-effect w-md waves-light');
    details.setAttribute('class', 'mt-4');
    detailsRow.setAttribute('class', 'row');
    detailscol.setAttribute('class', 'col-4');
    detailscol_sub.setAttribute('class', 'mt-3');
    followers_p.setAttribute('class', 'mb-0 text-muted');
    repos_p.setAttribute('class', 'mb-0 text-muted');
    organizations_p.setAttribute('class', 'mb-0 text-muted');
    //--setAttribute
    //innerContent
    //https://github.com/mojombo?tab=repositories
    loginName_heading.innerText = user.login;
    loginName_P.innerText = '@'+user.type+ ' | ';
    loginName_P_Span_a.innerText = `github.com/users/${user.login}`;
    repBtn.innerText = 'Go To Repositories';                            //TODO: add a tag outside button and link it to repositories page
    followers_p.innerText = user.followers_url;
    followers_h.innerText = 'Followers';
    repos_p.innerText = 'Repositories';
    organizations_p.innerText = 'Organizations';
    //--innerContent

    //appendChild
    listItems.appendChild(listItem);
    listItem.appendChild(cardBox);
    cardBox.appendChild(memberCard);
    memberCard.appendChild(thumbnail);
    thumbnail.appendChild(profileImage);
    memberCard.appendChild(loginName);
    loginName.appendChild(loginName_heading);
    loginName.appendChild(loginName_P);
    loginName_P.appendChild(loginName_P_Span);
    loginName_P.appendChild(loginName_P_Span_a);
    memberCard.appendChild(repBtn);
    memberCard.appendChild(details);
    details.appendChild(detailsRow);
    detailsRow.appendChild(detailscol);
    detailscol.appendChild(detailscol_sub);
    detailscol_sub.appendChild(followers_h);
    detailscol_sub.appendChild(followers_p);


    //--appendChild
}
function addUsersToDOM(users){
    users.forEach(element => {
        populateUL(element);
    });
}

(async function(){
    const users = await getUsers();
    addUsersToDOM(users)
    console.log(await users);
} )();


gi