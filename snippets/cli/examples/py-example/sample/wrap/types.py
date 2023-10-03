# NOTE: This is an auto-generated file. All modifications will be overwritten.
# type: ignore
from __future__ import annotations

from typing import Any, TypedDict, Optional
from enum import IntEnum

from polywrap import (
    Uri,
    Client,
    GenericMap,
    PolywrapClient,
    PolywrapClientConfigBuilder,
    sys_bundle,
    web3_bundle
)


### Env START ###

### Env END ###

### Objects START ###

### Objects END ###

### Enums START ###
### Enums END ###

### Imported Objects START ###

### Imported Objects END ###

### Imported Enums START ###


### Imported Enums END ###

### Imported Modules START ###

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsGenerateCreate2Address = TypedDict("EthersUtilsModuleArgsGenerateCreate2Address", {
    "address": str,
    "salt": str,
    "initCode": str,
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsKeccak256BytesEncodePacked = TypedDict("EthersUtilsModuleArgsKeccak256BytesEncodePacked", {
    "value": str,
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsKeccak256 = TypedDict("EthersUtilsModuleArgsKeccak256", {
    "value": str,
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsEncodeMetaTransaction = TypedDict("EthersUtilsModuleArgsEncodeMetaTransaction", {
    "operation": Optional[str],
    "to": str,
    "value": str,
    "data": str,
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsEncodeParams = TypedDict("EthersUtilsModuleArgsEncodeParams", {
    "types": list[str],
    "values": list[str],
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsEncodeFunction = TypedDict("EthersUtilsModuleArgsEncodeFunction", {
    "method": str,
    "args": Optional[list[str]],
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsToWei = TypedDict("EthersUtilsModuleArgsToWei", {
    "eth": str,
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsToEth = TypedDict("EthersUtilsModuleArgsToEth", {
    "wei": str,
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
EthersUtilsModuleArgsSolidityPack = TypedDict("EthersUtilsModuleArgsSolidityPack", {
    "types": list[str],
    "values": list[str],
}, total=False)

# URI: "wrapscan.io/polywrap/ethers-utils@1" #
class EthersUtils:
    _default_client: Client
    _default_uri: Uri
    _default_env: Optional[Any]

    def __init__(
        self,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ):
        self._default_client = self._get_client(client)
        self._default_uri = self._get_uri(uri)
        self._default_env = self._get_env(env)

    def _get_client(self, client: Optional[Client]) -> Client:
        return client or getattr(self, "_default_client", None) or self._get_default_client()

    def _get_uri(self, uri: Optional[Uri]) -> Uri:
        return uri or getattr(self, "_default_uri", None) or self._get_default_uri() 

    def _get_env(self, env: Optional[Any]) -> Any:
        return env or getattr(self, "_default_env", None) or self._get_default_env()

    def _get_default_client(self) -> Client:
        config = (
            PolywrapClientConfigBuilder()
            .add_bundle(sys_bundle)
            .add_bundle(web3_bundle)
            .build()
        )
        return PolywrapClient(config)

    def _get_default_uri(self) -> Optional[Uri]:
        return Uri.from_str("wrapscan.io/polywrap/ethers-utils@1")

    def _get_default_env(self) -> Any:
        return None

    def generate_create2_address(
        self,
        args: EthersUtilsModuleArgsGenerateCreate2Address,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="generateCreate2Address",
            args=args,
            env=_env,
        )

    def keccak256_bytes_encode_packed(
        self,
        args: EthersUtilsModuleArgsKeccak256BytesEncodePacked,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="keccak256BytesEncodePacked",
            args=args,
            env=_env,
        )

    def keccak256(
        self,
        args: EthersUtilsModuleArgsKeccak256,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="keccak256",
            args=args,
            env=_env,
        )

    def encode_meta_transaction(
        self,
        args: EthersUtilsModuleArgsEncodeMetaTransaction,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="encodeMetaTransaction",
            args=args,
            env=_env,
        )

    def encode_params(
        self,
        args: EthersUtilsModuleArgsEncodeParams,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="encodeParams",
            args=args,
            env=_env,
        )

    def encode_function(
        self,
        args: EthersUtilsModuleArgsEncodeFunction,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="encodeFunction",
            args=args,
            env=_env,
        )

    def to_wei(
        self,
        args: EthersUtilsModuleArgsToWei,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="toWei",
            args=args,
            env=_env,
        )

    def to_eth(
        self,
        args: EthersUtilsModuleArgsToEth,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="toEth",
            args=args,
            env=_env,
        )

    def solidity_pack(
        self,
        args: EthersUtilsModuleArgsSolidityPack,
        client: Optional[Client] = None,
        env: Optional[Any] = None,
        uri: Optional[Uri] = None,
    ) -> str:
        _client = self._get_client(client)
        _env = self._get_env(env)
        _uri = self._get_uri(uri)

        return _client.invoke(
            uri=_uri,
            method="solidityPack",
            args=args,
            env=_env,
        )

### Imported Modules END ###
