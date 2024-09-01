import json
import os

def convert_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.strip().split('\n')
    words = []
    
    for line in lines:
        parts = line.split(',')
        if len(parts) >= 3:
            word = {
                "other": parts[0],
                "pinyin": parts[1],
                "english": ','.join(parts[2:])  # Join all remaining parts for the English definition
            }
            words.append(word)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(words, f, ensure_ascii=False, indent=2)

# List of input files
input_files = ['hsk2.json', 'hsk3.json', 'hsk4.json', 'hsk5.json', 'hsk6.json']

# Convert each file
for input_file in input_files:
    output_file = f'converted_{input_file}'
    convert_file(input_file, output_file)
    print(f'Converted {input_file} to {output_file}')