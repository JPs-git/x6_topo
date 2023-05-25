const data = {
  nodes: [
    {
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },{
      shape: "server1",
      x: 100,
      y: 100,
      data: {
        name:'主机1',
        type: 'ssh',
        ip: '172.168.1.1'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_1',
            group: 'top',
          },
          {
            id: 'port_2',
            group: 'top',
          },
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'bottom',
          },
          {
            id: 'port_5',
            group: 'bottom',
          },
          {
            id: 'port_6',
            group: 'bottom',
          },
        ],
      }
    },
    {
      shape: "server2",
      x: 300,
      y: 100,
      data: {
        name:'主机2',
        type: 'dhcp',
        ip: '172.168.1.2'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },
    {
      shape: "server3",
      x: 100,
      y: 200,
      data: {
        name:'主机3',
        type: 'dns',
        ip: '172.168.1.3'
      },
      ports: {
        groups: {
         top: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         },
         bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
            },
          },
         }
          
        },
        items: [
          {
            id: 'port_3',
            group: 'top',
          },
          {
            id: 'port_4',
            group: 'top',
          },
          {
            id: 'port_5',
            group: 'top',
          },
        ],
      }
    },

  ],
  edges: [
    // {
    //   shape: "edge",
    //   source: "node3",
    //   target: "node4",
    //   label: "x6",
    //   // router: {
    //   //   name: "manhattan",
    //   //   args: {
    //   //     startDirections: ["top"],
    //   //     endDirections: ["bottom"],
    //   //   },
    //   // },
    //   attrs: {
    //     // line 是选择器名称，选中的边的 path 元素
    //     line: {
    //       stroke: "#8f8f8f",
    //       strokeWidth: 1,
    //     },
    //   },
    // },
  ],
};

export default data