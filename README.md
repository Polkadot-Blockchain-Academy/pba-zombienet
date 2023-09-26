# pba-zombienet

⚠⚠⚠ The binaries provided in this repo are **only** for demo proposes and are **not to be used in any production environment!** ⚠⚠⚠

This repo contains the instructions and examples in order to follow the Zombienet workshop. Please, first clone this [repo](https://github.com/Polkadot-Blockchain-Academy/pba-zombienet) to get all the examples and then follow the installation instruction for your os.

```
git clone git@github.com:Polkadot-Blockchain-Academy/pba-zombienet.git && cd pba-zombienet
```

# Installation

In order to run the examples using zombienet we have some requirement to be completed:

## Linux

- Download zombienet from the release's page in [github](https://github.com/paritytech/zombienet/releases)
- Make the binary executable
  ```sh
  # move the binary from downloads into this repo working dir and:
  chmod +x zombienet-linux-x64
  ```
- Run setup
  ```sh
  ./zombienet-linux-x64 setup polkadot polkadot-parachain
  ```
- Temporarily add the working directory to your PATH
  ```sh
  export PATH=$(pwd):$PATH
  ```

## macOS

- Download zombienet from the release's page in [github](https://github.com/paritytech/zombienet/releases)
- Make the binary executable
  ```sh
  # cd into your downloads and:
  chmod +x zombienet-macos
  ```
- Download the pre-compiled binaries from your arch (x64_86/aarch64) from https://github.com/Polkadot-Blockchain-Academy/pba-zombienet/releases, rename them and make executables

  ```sh
  # For x64_86 (osx 12)
  curl -o polkadot -L https://github.com/Polkadot-Blockchain-Academy/pba-zombienet/releases/download/v0.0.0/polkadot-x86_64-apple-darwin && chmod +x polkadot
  curl -o polkadot-parachain -L https://github.com/Polkadot-Blockchain-Academy/pba-zombienet/releases/download/v0.0.0/polkadot-parachain-x86_64-apple-darwin && chmod +x polkadot-parachain


  # For x64_86 (osx 11)
  curl -o polkadot -L https://github.com/Polkadot-Blockchain-Academy/pba-zombienet/releases/download/v0.0.0/polkadot-x86_64-apple-darwin-osx11 && chmod +x polkadot
  curl -o polkadot-parachain -L https://github.com/Polkadot-Blockchain-Academy/pba-zombienet/releases/download/v0.0.0/polkadot-parachain-x86_64-apple-darwin-osx11 && chmod +x polkadot-parachain


  # For M1/M2 (aarch64)
  curl -o polkadot -L https://github.com/Polkadot-Blockchain-Academy/pba-zombienet/releases/download/v0.0.0/polkadot-aarch64-apple-darwin && chmod +x polkadot
  curl -o polkadot-parachain -L https://github.com/Polkadot-Blockchain-Academy/pba-zombienet/releases/download/v0.0.0/polkadot-parachain-aarch64-apple-darwin && chmod +x polkadot-parachain
  ```

> **Note**: You will need to allow run applications from [undefined developers](https://macpaw.com/how-to/unidentified-developer-mac).

## Windows

- Enable WSL and then follow the [same instructions of Linux](#Linux) (using the setup command).
- Get the `ip` of the WSL, you can use this command to query the`eth0`
  ```sh
  ip addr show eth0
  ```
- Run this command as `administrator` to map the ports from the host (windows) to WSL, replacing [WSL_IP] with the ip from the previous step
  ```sh
  netsh interface portproxy add v4tov4 listenport=9944 listenaddress=127.0.0.1 connectport=9944 connectaddress=[WSL_IP]
  ```

# Run the examples

```sh
# Each terminal executing from the repo working directory, and PATH set:
export PATH=$(pwd):$PATH

# Spawning a testnet
./zombienet-<your os> -p native spawn examples/0001-small-network.toml
# Next you can access the direct links.

# Testing a running network
./zombienet-<your os> -p native test examples/0001-small-network.zndsl
```

There are more [examples/\*](./examples/) for more spawning configurations (TOML) and testing against them (Zombienet DSL - `zndsl`).
