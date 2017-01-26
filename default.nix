let
  pkgs = import <nixpkgs> {};
  stdenv = pkgs.stdenv;
in rec {
  project = stdenv.mkDerivation rec {
    name = "zurihac";
    buildInputs = [
      pkgs.nodejs-7_x
      pkgs.yarn
    ];
  };
}