function searchRepositories() {
  let uri = "https://api.github.com/search/repositories?q=";
  let searchTerms = $("#searchTerms").val();
  $.get(`${uri}${searchTerms}`)
    .done(displayRepos)
    .fail(displayError);
}

function displayRepos(data) {
  $("#results").html(data.items.map(repo => {
    return (
      `<ul>
        <li>${repo.name}</li>
        <li>${repo.description}</li>
        <li><a href="${repo.html_url}">Repo Link</a></li><br>
        <li><img src="${repo.owner.avatar_url}" width="100px"></li>
        <li><a href="#{repo.owner.url}"> ${repo.owner.login}'s profile page</a></li>
        <li><a href="#" onclick="showCommits(this);"
            data-owner="#{repo.owner.login}" data-repository="${repo.name}">
            Show Commits</a></li>
        </ul>`
    )
  }).join(""));
};












$(document).ready(function (){
});
