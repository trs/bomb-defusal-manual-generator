![Diagram](./test/img/wires.svg){.diagram}

## On the Subject of Wires
> Wires are the lifeblood of electronics! Wait, no, electricity is the lifeblood.
> Wires are more like the arteries. The veins? No matter…

- A wire module can have 3-6 wires on it.
- Only the one correct wire needs to be cut to disarm the
module.
- Wire ordering begins with the first on the top.

| |
|:-    |
_**3 wires:**_ |
If there are no red wires, cut the second wire. |
Otherwise, if the last wire is white, cut the last wire. |
Otherwise, if there is more than one blue wire, cut the last blue wire. |
Otherwise, cut the last wire. |

| _**4 wires:**_ |
If there is more than one red wire and the last digit of the serial number is odd, cut the last red wire. |
Otherwise, if the last wire is yellow and there are no red wires, cut the first wire. |
Otherwise, if there is exactly one blue wire, cut the first wire. |
Otherwise, if there is more than one yellow wire, cut the last wire. |
Otherwise, cut the second wire. |

| _**5 wires:**_ |
If the last wire is black and the last digit of the serial number is odd, cut the fourth wire. |
Otherwise, if there is exactly one red wire and there is more than one yellow wire, cut the first wire. |
Otherwise, if there are no black wires, cut the second wire. |
Otherwise, cut the first wire. |

| _**6 wires:**_ |
If there are no yellow wires and the last digit of the serial number is odd, cut the third wire. |
Otherwise, if there is exactly one yellow wire and there is more than one white wire, cut the fourth wire. |
Otherwise, if there are no red wires, cut the last wire. |
Otherwise, cut the fourth wire. |