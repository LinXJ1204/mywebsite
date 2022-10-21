# importing required modules
from email.policy import strict
import PyPDF2
import re
import os
import gc
# creating a pdf file object
#pdf_location = './PDF/2017 - A survey of model compression and acceleration for deep neural networks.pdf'
#pdf_location = 'C:/Users/ROG Zephyrus/Desktop/Yu/research/google-scholar-crawler_revised/PDF(not 5g6g)/2020 - Robust beamforming design for intelligent reflecting surface aided MISO communication systems.pdf'
#pdfFileObj = open(pdf_location, 'rb')
#print('path:',pdfFileObj)

####
#path = "C:/Users/ROG Zephyrus/Desktop/Yu/research/google-scholar-crawler_revised/PDF(not 5g6g)/2020 - Robust beamforming design for intelligent reflecting surface aided MISO communication systems.pdf"
#print("hi")
pdfFiles = []
path = "/Users/zhengweilin/Desktop/123"
for filename in os.listdir(path):
    if filename.endswith('.pdf'):
        pdfFiles.append(filename)
pdfFiles.sort()
#print('pdf',pdfFiles)
#pdfWriter = PyPDF2.PdfFileWriter()

for filename in pdfFiles:
    filepath = path + '/' + filename
    pdfFileObj = open(filepath, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj, strict=False)
    ##print(pdfReader.numPages)
    # creating a page object
    pageObj_0 = pdfReader.getPage(0)
    pageObj_1 = pdfReader.getPage(1)
        
    # extracting text from page
    content_0 = pageObj_0.extractText().split()
    content_1 = pageObj_1.extractText().split()
    content = content_0 + content_1
    print(content)

    content_abstract = []
    content_indexterms = []
    abstract_table = ['bstract', 'ABSTRACT', 'Abstract', 'BSTRACT','Abstract.']
    it_table = ['Keywords:', 'Keywords']
    intro_table = ['ntroduction', 'INTRODUCTION', 'Introduction', 'NTRODUCTION','Introduction.']
    ab_rec = False
    it_rec = False
    for i in range(len(content)):
        if content[i] in abstract_table:
            ab_rec = True
            #content_abstract.append('Abstract')
            continue
        if content[i-1] == 'Index' and content[i] == 'Terms':
            it_rec = True
            #content_indexterms.append(content[i-1] + ' ' +content[i])
            continue
        if content[i] in it_table:
            it_rec = True
            content_indexterms.append(content[i])
            continue
        if content[i] in intro_table:
            break
        if ab_rec:
            content_abstract.append(content[i-2])
        if it_rec:
            content_indexterms.append(content[i-2])
    del content_0, content_1, content, pageObj_0, pageObj_1
    gc.collect(0)
    #print('\n')
    #print('Abstract:', content_abstract)
    #print('\n')
    #print('Keywords:', content_indexterms)


    str = ' '
    seq = str.join(content_abstract)
    print('\n')
    print ('seq:',seq)


    # closing the pdf file object
    pdfFileObj.close()
    
    





    

####



	
"""
# creating a pdf reader object
#pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
	
# printing number of pages in pdf file
print(pdfReader.numPages)
	
# creating a page object
pageObj_0 = pdfReader.getPage(0)
pageObj_1 = pdfReader.getPage(1)
	
# extracting text from page
content_0 = pageObj_0.extractText().split()
content_1 = pageObj_1.extractText().split()
content = content_0 + content_1
#print(content)

content_abstract = []
content_indexterms = []
abstract_table = ['bstract', 'ABSTRACT', 'Abstract', 'BSTRACT','Abstract.']
it_table = ['Keywords:', 'Keywords']
intro_table = ['ntroduction', 'INTRODUCTION', 'Introduction', 'NTRODUCTION','Introduction.']
ab_rec = False
it_rec = False
for i in range(len(content)):
    if content[i] in abstract_table:
        ab_rec = True
        #content_abstract.append('Abstract')
        continue
    if content[i-1] == 'Index' and content[i] == 'Terms':
        it_rec = True
        #content_indexterms.append(content[i-1] + ' ' +content[i])
        continue
    if content[i] in it_table:
        it_rec = True
        content_indexterms.append(content[i])
        continue
    if content[i] in intro_table:
        break
    if ab_rec:
        content_abstract.append(content[i-2])
    if it_rec:
        content_indexterms.append(content[i-2])

print('\n')
print('Abstract:', content_abstract)
print('\n')
print('Keywords:', content_indexterms)


str = ' '
seq = str.join(content_abstract)
print('\n')
print ('seq:',seq)


# closing the pdf file object
pdfFileObj.close()
"""