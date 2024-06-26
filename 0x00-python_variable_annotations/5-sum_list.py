#!/usr/bin/env python3
'''sum_list module'''
from typing import List


def sum_list(input_list: List[float]) -> float:
    '''returns the sum of a list of floats'''
    total: float = 0.0
    for input_ in input_list:
        total += input_
    return total
