//callback 
$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        //make request to Github
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data:{
                client_id: 'd778a20d7beba8f8f3f3',
                client_secret: '4452f4e0f94684337a4eb2dd4202663ecd66a7d4'

            }
        }).done(function(user){
            $('#profile').html(`
                <div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title mt-4 mb-4">${user.name}</h3>
  </div>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-3">
      <img style="width: 100%;" class="thumbnail avatar" src="${user.avatar_url}">
      <a target="_blank" class="btn btn-primary btn-lg mt-3" href="${user.html_url}">View Profile</a>
      </div>
      <div class="col-md-9">
      <div class="alert alert-info" role="alert">  
      <span class="label label-default mr-4">Public Repos: ${user.public_repos} </span>
      <span class="label label-default mr-4">Public Gists: ${user.public_gists} </span>
      <span class="label label-default mr-4">Followers: ${user.followers} </span>
      <span class="label label-default mr-4">Following: ${user.following} </span>
      </div>
          <br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member since: ${user.created_at}</li>
          </ul>
        </div> 
      </div>
    </div>
  </div>
</div>

            `)
        });

    });
});

