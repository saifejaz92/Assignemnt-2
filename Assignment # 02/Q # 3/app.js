function Paragraph(text) {
        let newParagraph = document.createElement('p');
        newParagraph.textContent = text;
        document.body.appendChild(newParagraph);
      }
    Paragraph("Saif");