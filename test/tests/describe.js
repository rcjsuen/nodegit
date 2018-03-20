var path = require("path");
var local = path.join.bind(path, __dirname);

describe("Describe", function() {
  var NodeGit = require("../../");
  var Repository = NodeGit.Repository;
  var Describe = NodeGit.Describe;

  var reposPath = local("../repos/workdir");
  var commitSHA = "32789a79e71fbc9e04d3eff7425e1771eb595150";

  beforeEach(function() {
    var test = this;
    return Repository.open(reposPath)
      .then(function(repo) {
        test.repository = repo;
      });
  });

  it("can describe a commit", function() {
    var repository = this.repository;
    return repository.getCommit(commitSHA)
      .then(function(commit) {
        return Describe.commit(commit, null);
      })
      .then(function(result) {
        console.log(result);
        console.log(JSON.stringify(result));
      });
  });

  it("can describe a workdir", function() {
    var repository = this.repository;
    return Describe.workdir(repository, null)
      .then(function(result) {
        console.log(result);
        console.log(JSON.stringify(result));
      });
  });
});
