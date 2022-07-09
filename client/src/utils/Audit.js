const Items = [
  {
    house: 35,
    auditor: {
      name: "Nelson Diaz",
      id: "5c20faa3d0f8051e08922fb0"
    },
    date: Date.now(),
    houseAudit: [
      {
        id: 1,
        name: "logbook",
        value: true,
        finding: ""
      },
      {
        id: 2,
        name: "medication",
        value: true,
        finding: ""
      },
      {
        id: 3,
        name: "furniture",
        value: true,
        finding: ""
      },
      {
        id: 4,
        name: "frontdoor",
        value: true,
        finding: ""
      }
    ],
    facilitiesAudit: [
      {
        id: 10,
        name: "kitchenSink",
        value: false,
        finding: "Sink is stuck"
      },
      {
        id: 11,
        name: "furniture",
        value: false,
        finding: "Couch is broken"
      },
      {
        id: 12,
        name: "frontdoor",
        value: true,
        finding: ""
      }
    ]
  },
  {
    house: 30,
    auditor: {
      name: "Nelson Diaz",
      id: "5c20faa3d0f8051e08922fb0"
    },
    date: new Date("10/30/18"),
    houseAudit: [
      {
        id: 1,
        name: "logbook",
        value: true,
        finding: ""
      },
      {
        id: 2,
        name: "medication",
        value: false,
        finding: ""
      },
      {
        id: 3,
        name: "furniture",
        value: true,
        finding: ""
      },
      {
        id: 4,
        name: "frontdoor",
        value: false,
        finding: ""
      }
    ],
    facilitiesAudit: [
      {
        id: 10,
        name: "kitchenSink",
        value: true,
        finding: "Sink is stuck"
      },
      {
        id: 11,
        name: "furniture",
        value: false,
        finding: "Couch is broken"
      },
      {
        id: 12,
        name: "frontdoor",
        value: true,
        finding: ""
      }
    ]
  },
  {
    house: 29,
    auditor: {
      name: "Nelson Diaz",
      id: "5c20faa3d0f8051e08922fb0"
    },
    date: new Date("08/30/18"),
    houseAudit: [
      {
        id: 6,
        name: "yard",
        value: true,
        finding: ""
      },
      {
        id: 2,
        name: "kitchen",
        value: false,
        finding: ""
      },
      {
        id: 3,
        name: "furniture",
        value: true,
        finding: ""
      },
      {
        id: 4,
        name: "frontdoor",
        value: false,
        finding: ""
      }
    ],
    facilitiesAudit: [
      {
        id: 10,
        name: "kitchenSink",
        value: false,
        finding: "Sink is stuck"
      },
      {
        id: 11,
        name: "furniture",
        value: true,
        finding: "Couch is broken"
      },
      {
        id: 12,
        name: "frontdoor",
        value: true,
        finding: ""
      }
    ]
  }
];

export default Items;
