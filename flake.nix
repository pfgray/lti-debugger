{
  description = "An Algebraic Data Type generator for Typescript";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-22.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      lti-plugin = import ./. pkgs;
    in {
      devShell = pkgs.mkShell {
        packages = [
          pkgs.nodePackages.web-ext
          pkgs.nodePackages.yarn
          pkgs.envsubst
        ];
        shellHook = ''
          # ln -s ${lti-plugin.build}/libexec/lti-plugin/node_modules node_modules
        '';
      };
      packages = {
        lti-plugin-build = lti-plugin.lti-plugin-build;
      };
      apps.repl = flake-utils.lib.mkApp {
        drv = pkgs.writeShellScriptBin "repl" ''
          confnix=$(mktemp)
          echo "builtins.getFlake (toString $(git rev-parse --show-toplevel))" >$confnix
          trap "rm $confnix" EXIT
          nix repl $confnix
        '';
      };
    });
}
