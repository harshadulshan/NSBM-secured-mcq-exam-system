from app.database.db import SessionLocal, engine, Base
from app.models.question import Question

Base.metadata.create_all(bind=engine)

questions = [
    {"question_text": "What is the brain of a computer?", "option_a": "CPU", "option_b": "RAM", "option_c": "Keyboard", "option_d": "Monitor", "correct_option": 0, "category": "hardware"},
    {"question_text": "What does RAM stand for?", "option_a": "Random Access Memory", "option_b": "Read Access Memory", "option_c": "Run Any Memory", "option_d": "None", "correct_option": 0, "category": "hardware"},
    {"question_text": "What type of memory is ROM?", "option_a": "Volatile", "option_b": "Non Volatile", "option_c": "Temporary", "option_d": "Cache", "correct_option": 1, "category": "hardware"},
    {"question_text": "What type of device is a Keyboard?", "option_a": "Input", "option_b": "Output", "option_c": "Storage", "option_d": "Network", "correct_option": 0, "category": "hardware"},
    {"question_text": "What type of device is a Printer?", "option_a": "Input", "option_b": "Output", "option_c": "CPU", "option_d": "Memory", "correct_option": 1, "category": "hardware"},
    {"question_text": "What type of software is a Web Browser?", "option_a": "Application Software", "option_b": "System Software", "option_c": "Firmware", "option_d": "None", "correct_option": 0, "category": "software"},
    {"question_text": "What does GUI stand for?", "option_a": "Graphical User Interface", "option_b": "General User Interface", "option_c": "Good UI", "option_d": "None", "correct_option": 0, "category": "software"},
    {"question_text": "What is a LAN?", "option_a": "Local Area Network", "option_b": "Large Area Node", "option_c": "Linear Access Network", "option_d": "None", "correct_option": 0, "category": "networking"},
    {"question_text": "What does URL stand for?", "option_a": "Uniform Resource Locator", "option_b": "Universal Resource Link", "option_c": "Uniform Run Locator", "option_d": "None", "correct_option": 0, "category": "networking"},
    {"question_text": "What type of device is a Hard Disk?", "option_a": "Storage", "option_b": "CPU", "option_c": "RAM", "option_d": "Monitor", "correct_option": 0, "category": "hardware"},
    {"question_text": "What does ALU do?", "option_a": "Arithmetic and Logic Operations", "option_b": "Video Processing", "option_c": "Audio Processing", "option_d": "Printing", "correct_option": 0, "category": "hardware"},
    {"question_text": "What is Windows?", "option_a": "Operating System", "option_b": "Application Software", "option_c": "Hardware", "option_d": "Browser", "correct_option": 0, "category": "software"},
    {"question_text": "What is the function of a Parity Bit?", "option_a": "Error Detection", "option_b": "Speed Boost", "option_c": "Storage", "option_d": "Graphics", "correct_option": 0, "category": "hardware"},
    {"question_text": "What type of software is MS Word?", "option_a": "Application Software", "option_b": "Operating System", "option_c": "Hardware", "option_d": "None", "correct_option": 0, "category": "software"},
    {"question_text": "What is 10 in binary?", "option_a": "1010", "option_b": "1110", "option_c": "1000", "option_d": "1100", "correct_option": 0, "category": "general"},
    {"question_text": "What does an Operating System do?", "option_a": "Manages Hardware Resources", "option_b": "Prints Documents", "option_c": "Browses Internet", "option_d": "None", "correct_option": 0, "category": "software"},
    {"question_text": "Which of these is NOT a programming language?", "option_a": "Python", "option_b": "Java", "option_c": "HTML", "option_d": "Windows", "correct_option": 3, "category": "software"},
    {"question_text": "What is a Supercomputer used for?", "option_a": "Scientific Calculations", "option_b": "Gaming", "option_c": "Music", "option_d": "Video Editing", "correct_option": 0, "category": "hardware"},
    {"question_text": "What does BIOS stand for?", "option_a": "Basic Input Output System", "option_b": "Binary Input Output System", "option_c": "Basic Internal Operating System", "option_d": "None", "correct_option": 0, "category": "hardware"},
    {"question_text": "Which of these is a volatile memory?", "option_a": "RAM", "option_b": "ROM", "option_c": "Flash Drive", "option_d": "Hard Disk", "correct_option": 0, "category": "hardware"},
    {"question_text": "What does a Modem do?", "option_a": "Converts Signals", "option_b": "Prints Documents", "option_c": "Scans Images", "option_d": "Stores Data", "correct_option": 0, "category": "networking"},
    {"question_text": "Which key is used to cancel an action?", "option_a": "Esc", "option_b": "Ctrl", "option_c": "Alt", "option_d": "Tab", "correct_option": 0, "category": "general"},
    {"question_text": "What does a Compiler do?", "option_a": "Translates Code", "option_b": "Runs Programs", "option_c": "Stores Data", "option_d": "Debugs Code", "correct_option": 0, "category": "software"},
    {"question_text": "Which of these is NOT a type of memory?", "option_a": "Primary", "option_b": "Secondary", "option_c": "Secret", "option_d": "Tertiary", "correct_option": 2, "category": "hardware"},
    {"question_text": "Which device connects computers in a network?", "option_a": "Hub", "option_b": "Printer", "option_c": "Scanner", "option_d": "Monitor", "correct_option": 0, "category": "networking"},
    {"question_text": "What does HTTP stand for?", "option_a": "HyperText Transfer Protocol", "option_b": "High Text Transfer Protocol", "option_c": "HyperLink Transfer Protocol", "option_d": "None", "correct_option": 0, "category": "networking"},
    {"question_text": "Which of these is NOT an input device?", "option_a": "Joystick", "option_b": "Microphone", "option_c": "Printer", "option_d": "Keyboard", "correct_option": 2, "category": "hardware"},
    {"question_text": "What is the purpose of Cache Memory?", "option_a": "Increase CPU Speed", "option_b": "Store Files", "option_c": "Improve Graphics", "option_d": "Manage Network", "correct_option": 0, "category": "hardware"},
    {"question_text": "Which is a portable storage device?", "option_a": "USB Flash Drive", "option_b": "RAM", "option_c": "ROM", "option_d": "CPU", "correct_option": 0, "category": "hardware"},
    {"question_text": "Which software is used to manage files and folders?", "option_a": "File Manager", "option_b": "Compiler", "option_c": "Browser", "option_d": "ALU", "correct_option": 0, "category": "software"},
]

def seed():
    db = SessionLocal()
    existing = db.query(Question).count()
    if existing > 0:
        print(f"Database already has {existing} questions. Skipping seed.")
        db.close()
        return
    for q in questions:
        question = Question(**q)
        db.add(question)
    db.commit()
    db.close()
    print(f"Successfully added {len(questions)} questions to the database.")

if __name__ == "__main__":
    seed()