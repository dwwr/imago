# imago

<img width="1108" height="812" alt="Screenshot 2026-10-28 at 8 15 28 AM" src="https://github.com/user-attachments/assets/388b303c-a340-439b-ae66-68566a3774de" />

npm i && npm start

###
- **please note! App is not pre-populated with images- starting state is empty**
- image CRUD app, it can:
  - CREATE image record
  - GET all image records
  - GET image records by name
  - DELETE an image record by name
- only allows images (constrained via <input> tag attribute)
- this took roughly 12 hours of dev time
- NO AI assistance was used
- please see Task Breakdown below

### Task Breakdown

- stand up repo (2 hours)
  - nextjs vite react frontend ✅
    - with hello world ✅
      -fetch with response ✅
  - node backend ✅
    - returns hello world on load ✅
    - no db (can extend with db during technical) ✅
  - types - shared for now (can extend with distinct fe/be if needed during technical) ✅
  - everything spins up on “npm start” ✅
- rnd storage methods (1 hour)
  - use multer for fs, keep in-memory record "db" ✅
- API (4 hours)
  - addImage ✅
  - getAllImages ✅
  - getlImagesByName ✅
  - deleteImage ✅
- Frontend (4 hours)
  - client methods ✅
  - Uploader component ✅
    - Upload Button ✅
  - List & ListItem components ✅
    - title (“x Images”) ✅
    - just shows images ✅
  - Search bar ✅
    - no “search!” button ✅
    - useEffect, onChange, etc ✅
- Styling (2 hours)
  - style the page to my liking ✅
  - accommodate “delete” button ✅
  - fully custom or use design system (decision: custom, simple) ✅
- Next Ups
  - add mocks/initial seed
  - image items should also have image name, id, uploadedAt etc.
  - improve search (eg. ignore casing, ignore file extensions)
  - image compression, thumbnails
  - image sorting, order
  - basic responsiveness
  - accessibility
  - error handling
  - safeguards- eg. malware scan, file size & type limits, avoid collisions on db
  - loading, error, empty UI states
  - api test coverage
  - storybook for components
  - real db
  - bells & whistles- animations?
  - app strings, internationalization
