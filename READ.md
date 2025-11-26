# 🎓 Farmalyse (CropBot AI) - Comprehensive Viva Questions & Answers

Based on your project repositories, here's an extensive set of viva questions organized by topic, with detailed answers for both frontend and backend teams to study.

---

## 📚 TABLE OF CONTENTS
1. [Project Overview Questions](#project-overview)
2. [Frontend (Flutter) Questions](#frontend-questions)
3. [Backend (Python/FastAPI) Questions](#backend-questions)
4. [AI/ML Integration Questions](#aiml-questions)
5. [Architecture & Design Questions](#architecture-questions)
6. [Security & Performance Questions](#security-performance)
7. [Technical Implementation Questions](#technical-implementation)
8. [Real-World Scenario Questions](#scenario-questions)

---

## <a name="project-overview"></a>PROJECT OVERVIEW QUESTIONS

### Q1: What is the overall objective of the Farmalyse project? 
**Answer:**
Farmalyse (CropBot AI) is an intelligent agricultural application designed to help farmers identify crop diseases using AI-powered image analysis. The project combines a Flutter mobile frontend with a Python FastAPI backend to provide:
- Real-time crop disease detection through image upload/capture
- AI-driven remedies and treatment recommendations
- Voice-to-text agricultural assistance
- Agricultural news updates and insights
- Multi-language support for accessibility
- Cross-platform availability (Android, iOS, Web, Windows, macOS, Linux)

---

### Q2: Who are the primary users of this application?
**Answer:**
- **Primary Users:** Farmers and agricultural professionals
- **Secondary Users:** Agricultural extension officers, agricultural students, farming consultants
- **Target Regions:** Primarily regions with significant agricultural activity where farmers need accessible disease diagnosis solutions
- **Key Need:** Quick, reliable crop disease identification without requiring expert agronomists

---

### Q3: What are the core features of Farmalyse?
**Answer:**
1. **AI-Powered Disease Detection** - Analyzes crop images to identify diseases
2. **Real-time Agricultural News** - Provides latest agricultural insights
3. **Voice Input Support** - Hands-free interaction using speech-to-text
4. **Text Translation** - Multi-language support for global accessibility
5. **Geolocation Services** - Location-based agricultural information
6. **Text-to-Speech** - Audio output for results and news
7. **Offline Support** - Core features work with cached data
8. **Dark Mode** - Comfortable nighttime usage
9. **AI Chatbot** - Agricultural assistance through conversational AI

---

### Q4: What technology stack does Farmalyse use?
**Answer:**

**Frontend:**
- Flutter 3.8.1+ (UI framework)
- Dart (programming language)
- Key libraries: image_picker, speech_to_text, flutter_tts, geolocator, translator

**Backend:**
- Python with FastAPI framework
- OpenAI API (GPT-4o-mini) for text generation
- Google Gemini 2.5 Flash for image analysis
- OpenAI Whisper for speech recognition

**APIs & Services:**
- Google Gemini API for plant/disease identification
- OpenAI GPT for remedy generation
- OpenAI Whisper for speech-to-text conversion

---

## <a name="frontend-questions"></a>FRONTEND (FLUTTER) QUESTIONS

### Q5: What is Flutter and why was it chosen for Farmalyse?
**Answer:**
**Flutter** is Google's open-source UI framework for building cross-platform applications from a single codebase using Dart.

**Why chosen for Farmalyse:**
- **Cross-Platform Support:** Single codebase for Android, iOS, Web, Windows, macOS, and Linux
- **Fast Development:** Hot reload allows real-time code changes during development
- **Performance:** Compiled to native code for excellent performance
- **Rich UI Components:** Built-in widgets for creating beautiful interfaces
- **Cost-Effective:** Reduces development time and resources needed
- **Community Support:** Large active community and extensive documentation
- **Perfect for Image Processing:** Great libraries for image capture and manipulation

---

### Q6: Explain the Flutter project structure of Farmalyse
**Answer:**
```
lib/
├── main.dart                    # App entry point, theme, API configuration
├── screens/
│   ├── prediction_screen.dart   # Crop disease detection UI
│   └── news_screen.dart         # Agricultural news feed
├── pages/
│   └── home_page.dart           # Navigation hub
├── services/
│   └── api_service.dart         # Backend API communication
├── utils/                       # Helper functions
└── widgets/                     # Reusable components

assets/
├── images/                      # App graphics
├── animations/plant_loading.json # Lottie animations
├── fonts/                       # Custom fonts (Manrope)
└── vosk-model-small-en-in-0.4/  # Offline speech recognition
```

**Key Components:**
- **main.dart:** Configures theme, initializes API base URL based on platform
- **prediction_screen.dart:** Core UI for uploading images and viewing results
- **api_service.dart:** Handles HTTP communication with backend
- **Adaptive URLs:** Detects if running on emulator (10.0.2. 2:8000) or physical device

---

### Q7: What image processing dependencies are used in the frontend?
**Answer:**
- **image_picker** (^1.0.4) - Capture images via camera or select from gallery
- **http** (^1.5.0) - Make API requests to backend with multipart form data
- **flutter_tts** (^3.8.5) - Convert text results to speech output
- **flutter_sound** (^9.28.0) - Record and process audio files
- **lottie** (^3.3.2) - Animated loading indicators during processing
- **share_plus** (^12.0.1) - Share detection results with other apps
- **permission_handler** (^11.0.0) - Request camera, microphone, location permissions

---

### Q8: How does Farmalyse handle voice input?
**Answer:**
**Voice Input Flow:**
1. User taps voice input button
2. `speech_to_text` plugin captures audio from microphone
3. Audio is sent to backend's `/voice-ask-ai` endpoint
4. Backend processes with OpenAI Whisper model
5. Whisper converts audio to text transcription
6. Text is processed through ChatGPT for agricultural context
7. Response is returned to frontend
8. `flutter_tts` converts response to speech for user feedback

**Libraries Used:**
- `speech_to_text` (^7.3.0) - Captures voice input
- `flutter_tts` (^3.8.5) - Converts response to audio

**Advantages:**
- Hands-free operation for farmers working in fields
- Reduces manual typing on mobile devices
- Accessible for users with low literacy

---

### Q9: Explain the multi-language support in Farmalyse
**Answer:**
**Translation Implementation:**
- Uses `translator` package (^1.0.0) for language translation
- Supports detection and conversion to user's preferred language
- Translates detection results (disease names, remedies, recommendations)

**Supported Languages:**
- English (default)
- Regional languages based on user's device locale
- Dynamic translation during runtime

**Benefits:**
- Reaches non-English speaking farmers
- Increases accessibility in rural areas
- Localizes agricultural terminology

---

### Q10: How does Farmalyse handle geolocation services?
**Answer:**
**Geolocation Implementation:**
- Uses `geolocator` package (^10.1.0)
- Requests location permission via `permission_handler`

**Functionality:**
- Captures user's GPS coordinates
- Sends location data to backend with disease detection requests
- Backend can provide location-specific remedies based on regional climate
- Enables location-based agricultural news and recommendations

**Permission Requirements:**
- Android: `android.permission.ACCESS_FINE_LOCATION` and `android.permission.ACCESS_COARSE_LOCATION`
- iOS: NSLocationWhenInUseUsageDescription

---

### Q11: What permissions does the Farmalyse app require? 
**Answer:**
**Android Permissions** (AndroidManifest.xml):
- `CAMERA` - For image capture
- `READ_EXTERNAL_STORAGE` - For gallery access
- `WRITE_EXTERNAL_STORAGE` - For saving processed images
- `RECORD_AUDIO` - For voice input
- `ACCESS_FINE_LOCATION` - For GPS coordinates
- `INTERNET` - For API communication

**iOS Permissions** (Info.plist):
- **NSCameraUsageDescription** - Camera access
- **NSMicrophoneUsageDescription** - Microphone for voice input
- **NSLocationWhenInUseUsageDescription** - Location access
- **NSPhotoLibraryUsageDescription** - Photo library access

**Why Each Permission:**
- Camera: Capture crop images directly from app
- Microphone: Record voice queries
- Location: Provide region-specific recommendations
- Storage: Save and access image files
- Internet: Connect to backend API

---

### Q12: How does the app handle different API base URLs for different platforms?
**Answer:**
**Dynamic URL Configuration** (in main.dart):
```
- Emulator: http://10.0.2.2:8000
  (10.0.2.2 is Android emulator's way of addressing host machine)
  
- Physical Device: https://farmalyse-backend.onrender.com/
  (Production backend deployed on Render)
  
- Local Network: http://<YOUR_IP>:8000
  (For testing on devices on same network, e.g., 192.168. 43.1:8000)
```

**Benefits:**
- Enables seamless development, testing, and production workflows
- Supports multiple deployment scenarios
- Makes testing on various devices easy without code changes

---

### Q13: What is the purpose of the `. env` file in the frontend?
**Answer:**
**Purpose:**
- Stores configuration values that shouldn't be hardcoded
- Uses `flutter_dotenv` package

**Contains:**
```
API_BASE_URL=https://farmalyse-backend.onrender.com/
```

**Benefits:**
- Security: API URLs not exposed in source code
- Flexibility: Easy to switch between development and production
- Environment-specific configuration without rebuilding app

---

### Q14: How are animations implemented in Farmalyse? 
**Answer:**
**Animation Library:**
- Uses `lottie` package (^3.3.2)

**Usage:**
- **Loading Animations:** Shows animated plant/crop during image processing
- **File Location:** `assets/animations/plant_loading. json`
- **Purpose:** Provides visual feedback during API calls, improves UX

**Why Lottie:**
- Smooth, optimized animations without large file sizes
- Vector-based animations from After Effects files
- Better performance than animated images
- Professional appearance

---

### Q15: What is the role of `image_picker` in the detection process?
**Answer:**
**Functionality:**
- Allows users to either:
  1. **Capture a new photo** directly using device camera
  2. **Select existing photo** from device gallery

**Implementation:**
- Triggered by camera icon on prediction_screen
- Returns image file to main app
- Image is then compressed and sent to backend

**User Flow:**
1. User taps camera/gallery icon
2. `image_picker` opens camera or gallery
3. User captures or selects image
4. Image is loaded into app
5. User taps "Analyze" button
6. Image is sent to backend API

---

## <a name="backend-questions"></a>BACKEND (PYTHON/FASTAPI) QUESTIONS

### Q16: What is FastAPI and why is it used for Farmalyse backend?
**Answer:**
**FastAPI** is a modern, fast Python web framework for building APIs with high performance.

**Why FastAPI for Farmalyse:**
1. **High Performance:** Among the fastest Python frameworks, comparable to Node.js and Go
2. **Async Support:** Built-in async/await for handling concurrent requests
3. **Automatic API Documentation:** Auto-generates interactive Swagger UI
4. **Type Hints:** Python type annotations for better code quality and error detection
5. **Easy Testing:** Simple to write and run tests
6. **CORS Support:** Built-in middleware for cross-origin requests from Flutter app
7. **File Upload Support:** Seamless handling of multipart form data (image uploads)
8. **Security:** Built-in security utilities for authentication and authorization

---

### Q17: Explain the overall architecture of the Farmalyse backend
**Answer:**
**Main Components:**

1. **main.py** - Core API server
   - FastAPI application instance
   - Endpoints for disease prediction
   - Image compression and validation
   - Rate limiting and caching
   - API key authentication

2. **chatbot.py** - Conversational AI module
   - Mounted as sub-application on /chat route
   - Handles text-based agricultural queries
   - Uses OpenAI GPT for responses
   - Session/history management

3. **voice_handler.py** - Voice processing module
   - Handles audio file uploads
   - Whisper transcription
   - Voice-based queries to chatbot
   - Audio to text to response pipeline

4. **Supporting Infrastructure:**
   - Environment variables (. env file)
   - API rate limiting
   - Caching mechanism
   - File validation
   - Error handling and logging

---

### Q18: What is the main prediction endpoint and how does it work?
**Answer:**
**Endpoint:** `POST /predict`

**Purpose:** Analyzes crop images to detect diseases

**Authentication:** Requires API key in Authorization header

**Input:**
- File: Image file (JPG, JPEG, PNG, WEBP)
- Max size: 10 MB

**Processing Steps:**
1. **File Validation**
   - Check if file exists
   - Verify file extension (allowed: . jpg, .jpeg, .png, .webp)
   - Check file size (≤10 MB)

2. **Image Compression**
   - Resize to 512x512 max
   - Convert to RGB
   - Save as JPEG with 85% quality
   - Purpose: Reduce processing time and API costs

3. **Gemini API Analysis** (call_gemini_api)
   - Sends compressed image to Google Gemini 2.5 Flash
   - Analyzes plant type and disease presence
   - Returns JSON with:
     - `scientific_name` - Plant species
     - `common_name` - Common plant name
     - `disease` - Disease name or "None" if healthy
     - `confidence` - Detection confidence (0-100)
     - `causes` - Array of disease causes

4. **OpenAI Remedy Generation** (get_remedy_from_openai)
   - Uses cached results if available (optimization)
   - Sends plant info and disease to GPT-4o-mini
   - Generates treatment recommendations including:
     - Disease name
     - Causes
     - Natural solutions
     - Chemical solutions
     - Care tips

5. **Response**
   - Returns JSON with all analysis data
   - Includes processing time
   - Status indicator (success/error)

---

### Q19: How is caching implemented in the backend?
**Answer:**
**Cache Implementation:**

1. **Remedy Cache (Dictionary-based)**
   ```python
   remedy_cache: Dict[str, str] = {}
   
   # Key format: "{scientific_name}_{disease}".lower()
   key = f"{scientific_name}_{disease}".lower()
   
   if key in remedy_cache:
       return remedy_cache[key]  # Return cached remedy
   ```

2. **Purpose:**
   - Avoid redundant OpenAI API calls for same plant-disease combinations
   - Reduces latency on repeated queries
   - Decreases API costs

3. **Cache Hit Scenario:**
   - If farmer uploads tomato plant with Late Blight again
   - Same remedy is retrieved instantly from cache
   - No OpenAI API call needed

4.  **Limitations:**
   - In-memory only (lost on server restart)
   - No persistent storage
   - Could be improved with Redis or database

---

### Q20: What is rate limiting and how is it implemented?
**Answer:**
**Rate Limiting Implementation:**
```python
request_count = 0
MAX_REQUESTS_PER_MINUTE = 100
last_reset = time.time()

# In verify_api_key function:
now = time.time()
if now - last_reset > 60:
    request_count = 0
    last_reset = now

request_count += 1
if request_count > MAX_REQUESTS_PER_MINUTE:
    raise HTTPException(status_code=429, detail="Rate limit exceeded")
```

**Purpose:**
- Prevents API abuse
- Protects backend from overload
- Manages costs (fewer API calls to Gemini/OpenAI)
- Ensures fair usage among users

**Current Limit:** 100 requests per minute

**HTTP Response:** 429 (Too Many Requests) when exceeded

---

### Q21: How does API key authentication work?
**Answer:**
**Authentication Flow:**

1. **Configuration:**
   - API key stored in `.env` file
   - Default fallback: "cropbot-secret-key"
   - Loaded via: `os.getenv("API_AUTH_KEY", "cropbot-secret-key")`

2. **Verification:**
   ```python
   def verify_api_key(api_key: str = Depends(security)):
       if api_key.credentials != API_KEY:
           raise HTTPException(status_code=403, detail="Invalid API key")
   ```

3. **Implementation:**
   - Uses FastAPI's `HTTPBearer` security scheme
   - Client sends: `Authorization: Bearer <API_KEY>`
   - Every /predict request validates key

4. **Error Response:**
   - Status: 403 Forbidden
   - Message: "Invalid API key"

5. **Security Note:**
   - This is basic authentication; production should use JWT tokens
   - API key should be kept secret and not exposed in code

---

### Q22: What is CORS and why is it configured in Farmalyse?
**Answer:**
**CORS (Cross-Origin Resource Sharing):**
- Security feature allowing/restricting cross-domain requests
- Prevents unauthorized requests from unknown origins

**Configuration in Farmalyse:**
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],              # Allow all origins
    allow_credentials=True,            # Allow credentials
    allow_methods=["*"],               # Allow all HTTP methods
    allow_headers=["*"],               # Allow all headers
)
```

**Why Needed:**
- Flutter app runs on different origin than backend
- Without CORS, browser/app blocks the requests
- Allows frontend to communicate with backend API

**Security Consideration:**
- `allow_origins=["*"]` allows any domain (permissive)
- Production should specify exact allowed domains for security
- Example: `allow_origins=["https://farmalyse.example.com"]`

---

### Q23: Explain the Gemini API integration
**Answer:**
**API Details:**
- **Model:** Google Gemini 2. 5 Flash (latest stable model)
- **Endpoint:** `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent`
- **Authentication:** API key in query parameter

**Implementation:**
```python
def call_gemini_api(file_content: bytes, filename: str) -> Dict:
    # 1. Encode image to base64
    b64 = base64.b64encode(file_content).decode("utf-8")
    
    # 2. Create prompt for analysis
    prompt = "Analyze this plant leaf image. Return ONLY JSON with: 
             scientific_name, common_name, disease, confidence, causes..."
    
    # 3.  Build request payload
    payload = {
        "contents": [{
            "parts": [
                {"text": prompt},
                {"inline_data": {"mime_type": "image/jpeg", "data": b64}}
            ]
        }]
    }
    
    # 4. Send request with retry logic (3 attempts)
    response = requests.post(url, json=payload, timeout=50)
    
    # 5. Parse JSON response
    text_part = response["candidates"][0]["content"]["parts"][0]["text"]
    data = json.loads(text_part)
    
    # 6. Return structured data
    return {...}
```

**Retry Mechanism:**
- 3 retry attempts on failure
- Handles timeouts and API errors
- Timeout: 50 seconds per request

**Why Gemini:**
- Excellent image analysis capabilities
- Identifies plant species accurately
- Detects diseases and abnormalities
- Cost-effective for high volume

---

### Q24: Explain the OpenAI GPT integration for remedy generation
**Answer:**
**API Details:**
- **Model:** GPT-4o-mini (fast, cost-effective variant of GPT-4)
- **Purpose:** Generate remedy recommendations

**Implementation:**
```python
def get_remedy_from_openai(scientific_name, common_name, disease, causes):
    # 1. Check cache first
    key = f"{scientific_name}_{disease}".lower()
    if key in remedy_cache:
        return remedy_cache[key]
    
    # 2. Format causes as bullet list
    causes_str = "\n".join([f"- {c}" for c in causes])
    
    # 3. Create detailed prompt
    prompt = f"""
    Plant: {common_name} ({scientific_name})
    Disease: {disease}
    Causes:
    {causes_str}
    
    Provide remedy with these sections:
    **Disease Name:**
    **Causes:**
    **Natural Solutions:**
    **Chemical Solutions:**
    **Care Tips:**
    (Keep under 180 tokens
