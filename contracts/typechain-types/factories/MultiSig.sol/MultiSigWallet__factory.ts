/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MultiSigWallet,
  MultiSigWalletInterface,
} from "../../MultiSig.sol/MultiSigWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_numConfirmationsRequired",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "ConfirmTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "RevokeConfirmation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "SubmitTransaction",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "confirmTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "getTransaction",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "numConfirmations",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isConfirmed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numConfirmationsRequired",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "owners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "revokeConfirmation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "submitTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "numConfirmations",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026983803806200269883398181016040528101906200003791906200050d565b60008251116200007e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200007590620005d4565b60405180910390fd5b60008111801562000090575081518111155b620000d2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000c9906200066c565b60405180910390fd5b60005b8251811015620002d4576000838281518110620000f757620000f66200068e565b5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000173576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016a906200070d565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161562000203576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001fa906200077f565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508080620002cb90620007d0565b915050620000d5565b508060028190555050506200081d565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200034882620002fd565b810181811067ffffffffffffffff821117156200036a57620003696200030e565b5b80604052505050565b60006200037f620002e4565b90506200038d82826200033d565b919050565b600067ffffffffffffffff821115620003b057620003af6200030e565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003f382620003c6565b9050919050565b6200040581620003e6565b81146200041157600080fd5b50565b6000815190506200042581620003fa565b92915050565b6000620004426200043c8462000392565b62000373565b90508083825260208201905060208402830185811115620004685762000467620003c1565b5b835b8181101562000495578062000480888262000414565b8452602084019350506020810190506200046a565b5050509392505050565b600082601f830112620004b757620004b6620002f8565b5b8151620004c98482602086016200042b565b91505092915050565b6000819050919050565b620004e781620004d2565b8114620004f357600080fd5b50565b6000815190506200050781620004dc565b92915050565b60008060408385031215620005275762000526620002ee565b5b600083015167ffffffffffffffff811115620005485762000547620002f3565b5b62000556858286016200049f565b92505060206200056985828601620004f6565b9150509250929050565b600082825260208201905092915050565b7f6f776e6572732072657175697265640000000000000000000000000000000000600082015250565b6000620005bc600f8362000573565b9150620005c98262000584565b602082019050919050565b60006020820190508181036000830152620005ef81620005ad565b9050919050565b7f696e76616c6964206e756d626572206f6620726571756972656420636f6e666960008201527f726d6174696f6e73000000000000000000000000000000000000000000000000602082015250565b60006200065460288362000573565b91506200066182620005f6565b604082019050919050565b60006020820190508181036000830152620006878162000645565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f696e76616c6964206f776e657200000000000000000000000000000000000000600082015250565b6000620006f5600d8362000573565b91506200070282620006bd565b602082019050919050565b600060208201905081810360008301526200072881620006e6565b9050919050565b7f6f776e6572206e6f7420756e6971756500000000000000000000000000000000600082015250565b60006200076760108362000573565b915062000774826200072f565b602082019050919050565b600060208201905081810360008301526200079a8162000758565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620007dd82620004d2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620008125762000811620007a1565b5b600182019050919050565b611e6b806200082d6000396000f3fe6080604052600436106100ab5760003560e01c80639ace38c2116100645780639ace38c214610253578063a0e67e2b14610294578063c01a8c84146102bf578063c6427474146102e8578063d0549b8514610311578063ee22610b1461033c57610102565b8063025e7c271461010757806320ea8d86146101445780632e7700f01461016d5780632f54bf6e1461019857806333ea3dc8146101d557806380f59a651461021657610102565b36610102573373ffffffffffffffffffffffffffffffffffffffff167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a1534476040516100f892919061116d565b60405180910390a2005b600080fd5b34801561011357600080fd5b5061012e600480360381019061012991906111d6565b610365565b60405161013b9190611244565b60405180910390f35b34801561015057600080fd5b5061016b600480360381019061016691906111d6565b6103a4565b005b34801561017957600080fd5b5061018261067e565b60405161018f919061125f565b60405180910390f35b3480156101a457600080fd5b506101bf60048036038101906101ba91906112a6565b61068b565b6040516101cc91906112ee565b60405180910390f35b3480156101e157600080fd5b506101fc60048036038101906101f791906111d6565b6106ab565b60405161020d959493929190611399565b60405180910390f35b34801561022257600080fd5b5061023d600480360381019061023891906113f3565b6107be565b60405161024a91906112ee565b60405180910390f35b34801561025f57600080fd5b5061027a600480360381019061027591906111d6565b6107ed565b60405161028b959493929190611399565b60405180910390f35b3480156102a057600080fd5b506102a96108e8565b6040516102b691906114f1565b60405180910390f35b3480156102cb57600080fd5b506102e660048036038101906102e191906111d6565b610976565b005b3480156102f457600080fd5b5061030f600480360381019061030a9190611648565b610c53565b005b34801561031d57600080fd5b50610326610e56565b604051610333919061125f565b60405180910390f35b34801561034857600080fd5b50610363600480360381019061035e91906111d6565b610e5c565b005b6000818154811061037557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610430576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042790611714565b60405180910390fd5b806004805490508110610478576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046f90611780565b60405180910390fd5b816004818154811061048d5761048c6117a0565b5b906000526020600020906005020160030160009054906101000a900460ff16156104ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e39061181b565b60405180910390fd5b600060048481548110610502576105016117a0565b5b906000526020600020906005020190506003600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a690611887565b60405180910390fd5b60018160040160008282546105c491906118d6565b9250508190555060006003600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550833373ffffffffffffffffffffffffffffffffffffffff167ff0dca620e2e81f7841d07bcc105e1704fb01475b278a9d4c236e1c62945edd5560405160405180910390a350505050565b6000600480549050905090565b60016020528060005260406000206000915054906101000a900460ff1681565b60008060606000806000600487815481106106c9576106c86117a0565b5b906000526020600020906005020190508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010154826002018360030160009054906101000a900460ff16846004015482805461072a90611939565b80601f016020809104026020016040519081016040528092919081815260200182805461075690611939565b80156107a35780601f10610778576101008083540402835291602001916107a3565b820191906000526020600020905b81548152906001019060200180831161078657829003601f168201915b50505050509250955095509550955095505091939590929450565b60036020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600481815481106107fd57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201805461084c90611939565b80601f016020809104026020016040519081016040528092919081815260200182805461087890611939565b80156108c55780601f1061089a576101008083540402835291602001916108c5565b820191906000526020600020905b8154815290600101906020018083116108a857829003601f168201915b5050505050908060030160009054906101000a900460ff16908060040154905085565b6060600080548060200260200160405190810160405280929190818152602001828054801561096c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610922575b5050505050905090565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610a02576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f990611714565b60405180910390fd5b806004805490508110610a4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4190611780565b60405180910390fd5b8160048181548110610a5f57610a5e6117a0565b5b906000526020600020906005020160030160009054906101000a900460ff1615610abe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab59061181b565b60405180910390fd5b826003600082815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b54906119b6565b60405180910390fd5b600060048581548110610b7357610b726117a0565b5b906000526020600020906005020190506001816004016000828254610b9891906119d6565b9250508190555060016003600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167f5cbe105e36805f7820e291f799d5794ff948af2a5f664e580382defb6339004160405160405180910390a35050505050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610cdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd690611714565b60405180910390fd5b6000600480549050905060046040518060a001604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020016000151581526020016000815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002019081610dbb9190611bb6565b5060608201518160030160006101000a81548160ff0219169083151502179055506080820151816004015550508373ffffffffffffffffffffffffffffffffffffffff16813373ffffffffffffffffffffffffffffffffffffffff167fd5a05bf70715ad82a09a756320284a1b54c9ff74cd0f8cce6219e79b563fe59d8686604051610e48929190611c88565b60405180910390a450505050565b60025481565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ee8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edf90611714565b60405180910390fd5b806004805490508110610f30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2790611780565b60405180910390fd5b8160048181548110610f4557610f446117a0565b5b906000526020600020906005020160030160009054906101000a900460ff1615610fa4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9b9061181b565b60405180910390fd5b600060048481548110610fba57610fb96117a0565b5b9060005260206000209060050201905060025481600401541015611013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100a90611d04565b60405180910390fd5b60018160030160006101000a81548160ff02191690831515021790555060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260010154836002016040516110839190611db2565b60006040518083038185875af1925050503d80600081146110c0576040519150601f19603f3d011682016040523d82523d6000602084013e6110c5565b606091505b5050905080611109576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110090611e15565b60405180910390fd5b843373ffffffffffffffffffffffffffffffffffffffff167f5445f318f4f5fcfb66592e68e0cc5822aa15664039bd5f0ffde24c5a8142b1ac60405160405180910390a35050505050565b6000819050919050565b61116781611154565b82525050565b6000604082019050611182600083018561115e565b61118f602083018461115e565b9392505050565b6000604051905090565b600080fd5b600080fd5b6111b381611154565b81146111be57600080fd5b50565b6000813590506111d0816111aa565b92915050565b6000602082840312156111ec576111eb6111a0565b5b60006111fa848285016111c1565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061122e82611203565b9050919050565b61123e81611223565b82525050565b60006020820190506112596000830184611235565b92915050565b6000602082019050611274600083018461115e565b92915050565b61128381611223565b811461128e57600080fd5b50565b6000813590506112a08161127a565b92915050565b6000602082840312156112bc576112bb6111a0565b5b60006112ca84828501611291565b91505092915050565b60008115159050919050565b6112e8816112d3565b82525050565b600060208201905061130360008301846112df565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611343578082015181840152602081019050611328565b60008484015250505050565b6000601f19601f8301169050919050565b600061136b82611309565b6113758185611314565b9350611385818560208601611325565b61138e8161134f565b840191505092915050565b600060a0820190506113ae6000830188611235565b6113bb602083018761115e565b81810360408301526113cd8186611360565b90506113dc60608301856112df565b6113e9608083018461115e565b9695505050505050565b6000806040838503121561140a576114096111a0565b5b6000611418858286016111c1565b925050602061142985828601611291565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61146881611223565b82525050565b600061147a838361145f565b60208301905092915050565b6000602082019050919050565b600061149e82611433565b6114a8818561143e565b93506114b38361144f565b8060005b838110156114e45781516114cb888261146e565b97506114d683611486565b9250506001810190506114b7565b5085935050505092915050565b6000602082019050818103600083015261150b8184611493565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6115558261134f565b810181811067ffffffffffffffff821117156115745761157361151d565b5b80604052505050565b6000611587611196565b9050611593828261154c565b919050565b600067ffffffffffffffff8211156115b3576115b261151d565b5b6115bc8261134f565b9050602081019050919050565b82818337600083830152505050565b60006115eb6115e684611598565b61157d565b90508281526020810184848401111561160757611606611518565b5b6116128482856115c9565b509392505050565b600082601f83011261162f5761162e611513565b5b813561163f8482602086016115d8565b91505092915050565b600080600060608486031215611661576116606111a0565b5b600061166f86828701611291565b9350506020611680868287016111c1565b925050604084013567ffffffffffffffff8111156116a1576116a06111a5565b5b6116ad8682870161161a565b9150509250925092565b600082825260208201905092915050565b7f6e6f74206f776e65720000000000000000000000000000000000000000000000600082015250565b60006116fe6009836116b7565b9150611709826116c8565b602082019050919050565b6000602082019050818103600083015261172d816116f1565b9050919050565b7f747820646f6573206e6f74206578697374000000000000000000000000000000600082015250565b600061176a6011836116b7565b915061177582611734565b602082019050919050565b600060208201905081810360008301526117998161175d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f747820616c726561647920657865637574656400000000000000000000000000600082015250565b60006118056013836116b7565b9150611810826117cf565b602082019050919050565b60006020820190508181036000830152611834816117f8565b9050919050565b7f7478206e6f7420636f6e6669726d656400000000000000000000000000000000600082015250565b60006118716010836116b7565b915061187c8261183b565b602082019050919050565b600060208201905081810360008301526118a081611864565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118e182611154565b91506118ec83611154565b9250828203905081811115611904576119036118a7565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061195157607f821691505b6020821081036119645761196361190a565b5b50919050565b7f747820616c726561647920636f6e6669726d6564000000000000000000000000600082015250565b60006119a06014836116b7565b91506119ab8261196a565b602082019050919050565b600060208201905081810360008301526119cf81611993565b9050919050565b60006119e182611154565b91506119ec83611154565b9250828201905080821115611a0457611a036118a7565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611a6c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611a2f565b611a768683611a2f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611ab3611aae611aa984611154565b611a8e565b611154565b9050919050565b6000819050919050565b611acd83611a98565b611ae1611ad982611aba565b848454611a3c565b825550505050565b600090565b611af6611ae9565b611b01818484611ac4565b505050565b5b81811015611b2557611b1a600082611aee565b600181019050611b07565b5050565b601f821115611b6a57611b3b81611a0a565b611b4484611a1f565b81016020851015611b53578190505b611b67611b5f85611a1f565b830182611b06565b50505b505050565b600082821c905092915050565b6000611b8d60001984600802611b6f565b1980831691505092915050565b6000611ba68383611b7c565b9150826002028217905092915050565b611bbf82611309565b67ffffffffffffffff811115611bd857611bd761151d565b5b611be28254611939565b611bed828285611b29565b600060209050601f831160018114611c205760008415611c0e578287015190505b611c188582611b9a565b865550611c80565b601f198416611c2e86611a0a565b60005b82811015611c5657848901518255600182019150602085019450602081019050611c31565b86831015611c735784890151611c6f601f891682611b7c565b8355505b6001600288020188555050505b505050505050565b6000604082019050611c9d600083018561115e565b8181036020830152611caf8184611360565b90509392505050565b7f63616e6e6f742065786563757465207478000000000000000000000000000000600082015250565b6000611cee6011836116b7565b9150611cf982611cb8565b602082019050919050565b60006020820190508181036000830152611d1d81611ce1565b9050919050565b600081905092915050565b60008154611d3c81611939565b611d468186611d24565b94506001821660008114611d615760018114611d7657611da9565b60ff1983168652811515820286019350611da9565b611d7f85611a0a565b60005b83811015611da157815481890152600182019150602081019050611d82565b838801955050505b50505092915050565b6000611dbe8284611d2f565b915081905092915050565b7f7478206661696c65640000000000000000000000000000000000000000000000600082015250565b6000611dff6009836116b7565b9150611e0a82611dc9565b602082019050919050565b60006020820190508181036000830152611e2e81611df2565b905091905056fea26469706673582212207d6ab577e7aaae1b60177da55842f534111667ac9414d4937287a24094ca715e64736f6c63430008120033";

type MultiSigWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiSigWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiSigWallet__factory extends ContractFactory {
  constructor(...args: MultiSigWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _owners: AddressLike[],
    _numConfirmationsRequired: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _owners,
      _numConfirmationsRequired,
      overrides || {}
    );
  }
  override deploy(
    _owners: AddressLike[],
    _numConfirmationsRequired: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _owners,
      _numConfirmationsRequired,
      overrides || {}
    ) as Promise<
      MultiSigWallet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MultiSigWallet__factory {
    return super.connect(runner) as MultiSigWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSigWalletInterface {
    return new Interface(_abi) as MultiSigWalletInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MultiSigWallet {
    return new Contract(address, _abi, runner) as unknown as MultiSigWallet;
  }
}
