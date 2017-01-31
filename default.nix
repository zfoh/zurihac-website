let
  pkgs_src = import ./nixpkgs.nix;
  pkgs = import pkgs_src {};
  stdenv = pkgs.stdenv;
in {
  project = stdenv.mkDerivation {
    name = "zurihac-website";
    src = ./. ;
    buildInputs = [
      pkgs.nodejs-7_x
      pkgs.yarn
    ];
  };
}
