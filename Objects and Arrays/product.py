
from typing import TypeVar, Generic

T = TypeVar("T")

class Product(Generic[T]):
    quantity: T
    name: str
    def __init__(self, quantity, name):
        self.quantity = quantity
        self.name = name

productNumber = Product[str](1,"String")

print(productNumber.quantity)