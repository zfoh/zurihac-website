# Pinned version of nixpkgs that we use for our development and deployment.
(import <nixpkgs> {}).pkgs.fetchFromGitHub {
  owner  = "NixOS";
  repo   = "nixpkgs";
  rev    = "92a3ecf4a30d6f82e7ca6d97ff9feb7ef67bc1b2"; # nixpkgs-unstable as of 2017-01-29
  sha256 = "1frazg66lgvw63k8mkwdvv010rv3ddvylj0w9rh1clqba8wwk99i";
}
