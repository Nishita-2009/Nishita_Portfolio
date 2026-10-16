import os

def create_resume_pdf():
    # Simple, compliant single-page PDF generator
    lines = [
        ("F2", 18, "GOTTIPATI NISHITA SRI"),
        ("F1", 11, "Computer Science Undergraduate | Software Development | AI Applications"),
        ("F1", 9, "Email: nishithasri851@gmail.com | Location: Hyderabad, India"),
        ("F1", 9, "GitHub: https://github.com/Nishita-2009 | LinkedIn: https://linkedin.com/in/nishita-sri-gottipati-b8140a382"),
        ("SEP", 0, ""),
        ("F2", 12, "PROFESSIONAL SUMMARY"),
        ("F1", 9.5, "Computer Science undergraduate at BITS Pilani with a solid foundation in programming, problem-solving, and"),
        ("F1", 9.5, "software development. Actively pursuing industry-ready training at NIAT with focused interests in web development,"),
        ("F1", 9.5, "Data Structures & Algorithms, Generative AI, Large Language Models, and RAG fundamentals."),
        ("SEP", 0, ""),
        ("F2", 12, "EDUCATION & TRAINING"),
        ("F2", 10, "BSc Computer Science - BITS Pilani (Digital) [Sep 2025 - Present] | Hyderabad"),
        ("F1", 9, "- Core foundation in Computer Science principles, algorithms, and computational problem solving."),
        ("F2", 10, "Industry-Ready Training - NxtWave Innovation in Advanced Technologies (NIAT) [Aug 2025 - Present] | Hyderabad"),
        ("F1", 9, "- Rigorous practical curriculum focused on full-stack web engineering, practical AI, and software design."),
        ("SEP", 0, ""),
        ("F2", 12, "TECHNICAL SKILLS"),
        ("F2", 9.5, "Programming Languages: Python, C++"),
        ("F2", 9.5, "Web Development: HTML, CSS, JavaScript"),
        ("F2", 9.5, "Computer Science: Data Structures & Algorithms (DSA), Problem Solving, DBMS"),
        ("F2", 9.5, "AI Technologies: Generative AI, Large Language Models (LLMs), RAG Fundamentals"),
        ("F2", 9.5, "Databases: SQLite, MongoDB"),
        ("F1", 9.5, "Additional Technologies & Practical Experience: Node.js, Express.js, Firebase Auth, Firestore, Cloudinary, Git, GitHub, Netlify, React"),
        ("SEP", 0, ""),
        ("F2", 12, "KEY PROJECTS"),
        ("F2", 10, "Growz - AI-Driven MSME Business Management Platform"),
        ("F1", 9, "- Designed to help small & medium-sized businesses manage operations and analyze business performance."),
        ("F1", 9, "- Intended value: business insights, data-driven recommendations, intelligent assistance, sales understanding, and growth tracking."),
        ("F2", 10, "OptHire - AI-Powered Recruitment & Candidate Assessment Platform"),
        ("F1", 9, "- Automated candidate evaluation workflow leveraging specialized AI agents."),
        ("F1", 9, "- Features: resume parsing, candidate matching, ATS scoring, skill-gap analysis, and interview question generation."),
        ("F2", 10, "Sujala RO Purifiers - E-Commerce Website for Water Purification Products"),
        ("F1", 9, "- Practical e-commerce web platform for product discovery, shopping cart, and WhatsApp-based ordering."),
        ("F1", 9, "- Integrated Firebase authentication, Firestore database, and Cloudinary image management."),
        ("SEP", 0, ""),
        ("F2", 12, "CERTIFICATIONS & WORKSHOPS"),
        ("F1", 9.5, "- SOAR - AI To Aspire by Microsoft and NSDC"),
        ("F1", 9.5, "- AI Agent Workshop"),
        ("F1", 9.5, "- Gesture Workshop"),
        ("SEP", 0, ""),
        ("F2", 12, "PROFESSIONAL STRENGTHS"),
        ("F1", 9.5, "Analytical Thinking | Problem Solving | Communication | Teamwork | Adaptability | Continuous Learning")
    ]

    # Generate PDF streams
    y = 750
    stream_ops = []
    
    for font, size, text in lines:
        if font == "SEP":
            # Draw subtle divider line
            y -= 4
            stream_ops.append(f"0.8 0.8 0.85 RG 0.5 w 50 {y} m 562 {y} l S")
            y -= 10
            continue
        
        # Escape parenthesis
        clean_text = text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        
        if font == "F2" and size >= 12:
            y -= 4
            stream_ops.append(f"BT /{font} {size} Tf 0.1 0.15 0.3 rg 50 {y} Td ({clean_text}) Tj ET")
            y -= (size + 3)
        elif font == "F2":
            stream_ops.append(f"BT /{font} {size} Tf 0.15 0.18 0.25 rg 50 {y} Td ({clean_text}) Tj ET")
            y -= (size + 3)
        else:
            stream_ops.append(f"BT /{font} {size} Tf 0.25 0.28 0.35 rg 50 {y} Td ({clean_text}) Tj ET")
            y -= (size + 3.5)
            
    stream_content = "\n".join(stream_ops)
    stream_bytes = stream_content.encode("latin1")
    stream_len = len(stream_bytes)

    objects = []
    
    # Obj 1: Catalog
    objects.append("<< /Type /Catalog /Pages 2 0 R >>")
    # Obj 2: Pages
    objects.append("<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # Obj 3: Page
    objects.append("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>")
    # Obj 4: Helvetica
    objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    # Obj 5: Helvetica-Bold
    objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    # Obj 6: Contents
    objects.append(f"<< /Length {stream_len} >>\nstream\n{stream_content}\nendstream")

    # Assemble PDF
    output = bytearray()
    output.extend(b"%PDF-1.4\n")
    
    offsets = []
    for i, obj in enumerate(objects, 1):
        offsets.append(len(output))
        output.extend(f"{i} 0 obj\n{obj}\nendobj\n".encode("latin1"))
        
    startxref = len(output)
    output.extend(f"xref\n0 {len(objects) + 1}\n".encode("latin1"))
    output.extend(b"0000000000 65535 f \n")
    for off in offsets:
        output.extend(f"{off:010d} 00000 n \n".encode("latin1"))
        
    output.extend(f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{startxref}\n%%EOF\n".encode("latin1"))
    
    os.makedirs("public", exist_ok=True)
    with open("public/resume.pdf", "wb") as f:
        f.write(output)
    print("Generated public/resume.pdf successfully")

if __name__ == "__main__":
    create_resume_pdf()
