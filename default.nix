{yarn2nix, mkYarnPackage, nodePackages, ...}:
  let
    foo = "foo";
  in {
    build = mkYarnPackage {
      name = "lti-plugin";
      src = ./.;
      packageJSON = ./package.json;
      yarnLock = ./yarn.lock;
    };
  }